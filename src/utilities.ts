export const handleResponse = (
  res: any,
  status: 200 | 400 | 500,
  message: string,
  data: any = null,
) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};
