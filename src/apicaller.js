import settingVariable from './config'
import axios from 'axios'

var host = settingVariable.backend_url

var getAllMemeEndpoint = 'get_memes'
var editMemeEndPoint = 'caption_image'

export async function get_meme() {
    var url = host + getAllMemeEndpoint
    console.log('---------', url)
    var HEADERS = { 'Accept-Encoding': 'application/json', }

    var axios_request = await axios.get(url, { headers: HEADERS })
    return await axios_request.data
}

export async function edit_meme(props) {
    var user_name = 'g_user_103835423915400496909'
    var password = 'new@pass'
    var template_id = props.template_id
    var first_txt = props.first_txt
    var sec_text = props.sec_text
    var url = `${host}${editMemeEndPoint}?username=${user_name}&password=${password}&template_id=${template_id}&text0=${first_txt}&text1=${sec_text}`
    var HEADERS = { 'Accept-Encoding': 'application/json', }
    console.log(url)
    var axios_request = await axios.get(url, { headers: HEADERS })
    return await axios_request.data
}

