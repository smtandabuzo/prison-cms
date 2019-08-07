'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  nationalID: async function(params) {
    let url = params.request.url;
    let length = url.slice(22).length;
    console.log('Length ' + length);
    let param = url.slice(-(length));
    console.log('Param ' + param);
    return await Transfer.find({nationalID: param});
  },
  deleteByNationalID: async function(params){
    let url = params.request.url;
    let length = url.slice(22).length;
    console.log('Length ' + length);
    let param = url.slice(-(length));
    return await Transfer.deleteOne({nationalID: param});
  },
};
