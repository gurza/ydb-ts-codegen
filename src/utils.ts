import { Expression, factory, NodeFlags, TypeNode } from "typescript";

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getFunctionCall(name: string, args: string[]) {
  const functionName = factory.createIdentifier(name);
  const handler = factory.createCallExpression(
    functionName,
    undefined,
    args.map((arg) => factory.createIdentifier(arg))
  );
  return handler;
}

export const getConst = (left: string, right: Expression) =>
  factory.createVariableStatement(
    undefined,
    factory.createVariableDeclarationList(
      [factory.createVariableDeclaration(left, undefined, undefined, right)],
      NodeFlags.Const
    )
  );
