#! /usr/bin/env node

const fs = require('fs')
const superagent = require('superagent')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const upload = []

function readFiles (path = 'allure-results') {
  const files = fs.readdirSync(path)
  for (const file in files) {
    const contents = fs.readFileSync(path + '/' + files[file], { encoding: 'base64' })
    upload.push({
      file_name: files[file],
      content_base64: contents
    })
    console.log('add file to upload: ' + upload[file].file_name)
  }
}

async function uploadFile (url = process.env.URL_REPORT, projectID) {
  const body = {
    results: upload
  }
  console.log('starting upload files')
  superagent
    .post(url + '/allure-docker-service/send-results')
    .query({ project_id: projectID })
    .send(body)
    .end((err, res) => {
      if (err) { console.log(err) }
      console.log('files uploaded, now sending command to generated report')
      return res
    })
  superagent
    .get(url + '/allure-docker-service/generate-report')
    .query({ project_id: projectID })
    .end((err, res) => {
      if (err) { console.log(err) }
      console.log('thanks all done.')
      return res
    })
}

async function main () {
  readFiles(argv.path)
  await uploadFile(argv.url, argv.projectID)
}

main()
