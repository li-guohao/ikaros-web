import request from '@/utils/request'

const api = {
  basic: '/file/',
  upload: '/file/data',
  list: '/file/list',
  types: '/file/types',
  places: '/file/places'
}

export default api

export function upload (file, options) {
  const formData = new FormData()
  formData.append('file', file)
  return request({
    url: api.upload,
    method: 'put',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * params:
 *   page: 0
 *   size: 50
 *   keyword: undefined
 *   mediaType: undefined
 *   place: undefined
 */
export function list (params) {
  return request({
    url: api.list,
    method: 'get',
    params: params
  })
}

// 文件类型
export function listTypes () {
  return request({
    url: api.types,
    method: 'get'
  })
}

// 文件的存储位置
export function listPlaces () {
  return request({
    url: api.places,
    method: 'get'
  })
}

export function deleteById (id) {
  return request({
    url: api.basic,
    method: 'delete',
    params: id
  })
}

export function deleteInBatch (ids) {
  return request({
    url: api.basic,
    method: 'delete',
    params: ids
  })
}
