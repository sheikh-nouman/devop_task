// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var colorize_pb = require('./colorize_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_colorize_ColorizeRequest(arg) {
  if (!(arg instanceof colorize_pb.ColorizeRequest)) {
    throw new Error('Expected argument of type colorize.ColorizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_colorize_ColorizeRequest(buffer_arg) {
  return colorize_pb.ColorizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_colorize_ColorizeResponse(arg) {
  if (!(arg instanceof colorize_pb.ColorizeResponse)) {
    throw new Error('Expected argument of type colorize.ColorizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_colorize_ColorizeResponse(buffer_arg) {
  return colorize_pb.ColorizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ColorizerService = exports.ColorizerService = {
  colorize: {
    path: '/colorize.Colorizer/colorize',
    requestStream: false,
    responseStream: true,
    requestType: colorize_pb.ColorizeRequest,
    responseType: colorize_pb.ColorizeResponse,
    requestSerialize: serialize_colorize_ColorizeRequest,
    requestDeserialize: deserialize_colorize_ColorizeRequest,
    responseSerialize: serialize_colorize_ColorizeResponse,
    responseDeserialize: deserialize_colorize_ColorizeResponse,
  },
};

exports.ColorizerClient = grpc.makeGenericClientConstructor(ColorizerService);
