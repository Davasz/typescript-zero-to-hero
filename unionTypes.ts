type SuccessResponse = {
    status: "success";
    data: string[];
};

type ErrorResponse = {
    status: "error";
    message: string;
};

type Response = SuccessResponse | ErrorResponse;

function handleResponse(response: Response) {
    if (response.status === "success") {
        console.log("Data received:", response.data);
    } else {
        console.log("Error:", response.message);
    }
}

const successResponse: Response = { status: "success", data: ["data1", "data2"] };
const errorResponse: Response = { status: "error", message: "Something went wrong" };

handleResponse(successResponse); 
handleResponse(errorResponse); 
