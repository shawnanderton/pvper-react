import { BULKTYPES } from './../enums/blizzard';
import { OperationInput, BulkOperationType } from '@azure/cosmos';

function toOperationInput(
	resource: Object,
	partitionKey: string,
	type: BULKTYPES,
): OperationInput {
	const operationInput: OperationInput = {
		operationType: BulkOperationType[type.toString()],
		partitionKey: partitionKey,
		resourceBody: Object.assign(resource),
	};

	return operationInput;
}

export { toOperationInput };
