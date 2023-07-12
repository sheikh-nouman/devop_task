const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "./colorization-client/colorize.proto";

// Load the protobuf dynamically using proto-loader
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const colorizeProto = grpc.loadPackageDefinition(packageDefinition).colorize;

// Create a gRPC client instance
const client = new colorizeProto.Colorizer("localhost:8080", grpc.credentials.createInsecure());

// Create a function to make the gRPC call
function colorize(op, image) {
  console.log("zero");
  const request = {
    op: op,
    image: stringToBytes(image),
  };

  console.log("first");
  // Make the gRPC call to the colorize method
  const call = client.colorize(request);
  console.log("second");

  // Handle the response stream
  call.on("data", (response) => {
    console.log("Received response:", response);
  });

  call.on("end", () => {
    console.log("Streaming ended.");
  });

  call.on("error", (err) => {
    console.error("Error here:", err);
  });
}

function stringToBytes(image) {
  var bytesv2 = []; // char codes

  for (var i = 0; i < image.length; ++i) {
    var code = image.charCodeAt(i);

    bytesv2 = bytesv2.concat([code & 0xff, (code / 256) >>> 0]);
  }

  return bytesv2;
}

module.exports = { colorize };
