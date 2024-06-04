import { AlertType, AlertsResponse } from "../types/Park";
import { Alert, AlertDescription, AlertTitle } from "./alert";

const AlertsContainer = ({ alerts }: { alerts?: AlertsResponse }) => {
  const handleVariant = (category: AlertType) => {
    switch (category) {
      case AlertType.INFORMATION:
        return "info";
      case AlertType.DANGER:
        return "danger";
      case AlertType.CAUTION:
        return "caution";
      case AlertType.PARK_CLOSURE:
        return "closure";
    }
  };
  return (
    <>
      {alerts?.data?.map((alert, index) => {
        const variant = handleVariant(alert.category);
        return (
          <Alert variant={variant} key={index}>
            <svg
              className="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <AlertTitle className="text-xl">{alert.title}</AlertTitle>
            <AlertDescription>{alert.description}</AlertDescription>
          </Alert>
        );
      })}
    </>
  );
};

export default AlertsContainer;
