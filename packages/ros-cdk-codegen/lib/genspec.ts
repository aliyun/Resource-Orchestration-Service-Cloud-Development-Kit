// Classes and definitions that have to do with modeling and decisions around code generation
//
// Does not include the actual code generation itself.

import { schema } from '@ros-cdk/ros-spec';
import * as codemaker from 'codemaker';
import { itemTypeNames, PropertyAttributeName, scalarTypeNames, SpecName } from './spec-utils';
import * as util from './util';

export const RESOURCE_CLASS_PREFIX = 'Ros';
export const CORE_NAMESPACE = 'ros';

/**
 * The name of a class or method in the generated code.
 *
 * Has constructor functions to generate them from the ROS specification.
 *
 * This refers to TypeScript constructs (typically a class)
 */
export class CodeName {
  public static forRosResource(specName: SpecName, affix: string): CodeName {
    const className = RESOURCE_CLASS_PREFIX + specName.resourceName + affix;
    return new CodeName(packageName(specName), '', className, specName);
  }

  public static forResource(specName: SpecName, affix: string): CodeName {
    const className = specName.resourceName + affix;
    return new CodeName(packageName(specName), '', className, specName);
  }

  public static forResourceProperties(resourceName: CodeName): CodeName {
    return new CodeName(
      resourceName.packageName,
      resourceName.namespace,
      `${resourceName.className}Props`,
      resourceName.specName,
    );
  }

  public static forPropertyType(specName: PropertyAttributeName, resourceClass: CodeName): CodeName {
    // Exception for an intrinsic type
    if (specName.propAttrName === 'Tag' && specName.resourceName === '') {
      return TAG_NAME;
    }

    // These are in a namespace named after the resource
    return new CodeName(packageName(specName), resourceClass.className, `${specName.propAttrName}Property`, specName);
  }

  public static forPrimitive(primitiveName: string): CodeName {
    return new CodeName('', '', primitiveName);
  }

  // tslint:disable:no-shadowed-variable
  constructor(
    readonly packageName: string,
    readonly namespace: string,
    readonly className: string,
    readonly specName?: SpecName,
    readonly methodName?: string,
  ) {}
  // tslint:enable:no-shadowed-variable

  /**
   * Alias for className
   *
   * Simply returns the top-level declaration name,  but reads better at the call site if
   * we're generating a function instead of a class.
   */
  public get functionName(): string {
    return this.className;
  }

  /**
   * Return the fully qualified name of the TypeScript object
   *
   * (When referred to it from the same package)
   */
  public get fqn(): string {
    return util.joinIf(this.namespace, '.', util.joinIf(this.className, '.', this.methodName));
  }

  public referToMethod(methodName: string): CodeName {
    return new CodeName(this.packageName, this.namespace, this.className, this.specName, methodName);
  }

  /**
   * Return a relative name from a given name to this name.
   *
   * Strips off the namespace if they're the same, otherwise leaves the namespace on.
   */
  public relativeTo(fromName: CodeName): CodeName {
    if (this.namespace === fromName.namespace) {
      return new CodeName(this.packageName, '', this.className, this.specName, this.methodName);
    }
    return this;
  }
}

export const TAG_NAME = new CodeName('', CORE_NAMESPACE, 'RosTag');
export const TOKEN_NAME = new CodeName('', CORE_NAMESPACE, 'IResolvable');

/**
 * Resource attribute
 */
export class Attribute {
  constructor(readonly propertyName: string, readonly attributeType: string, readonly constructorArguments: string) {}
}

/**
 * Return the package in which this RosName should be stored
 *
 * Example: ALIYUN::ECS -> ecs
 */
export function packageName(module: SpecName | string): string {
  if (module instanceof SpecName) {
    module = module.module;
  }

  const parts = module.split('::');

  return overridePackageName(parts[parts.length - 1].toLowerCase());
}

/**
 * Overrides special-case namespaces like serverless=>sam
 */
function overridePackageName(name: string): string {
  if (name === 'serverless') {
    return 'sam';
  }
  return name;
}

/**
 * Return the name by which the property mapping function will be defined
 *
 * It will not be defined in a namespace, because otherwise we would have to export it and
 * we don't want to expose it to clients.
 */
export function rosMapperName(typeName: CodeName): CodeName {
  if (!typeName.packageName) {
    // Built-in or intrinsic type, built-in mappers
    const mappedType = typeName.className === 'any' ? 'object' : typeName.className;
    return new CodeName('', CORE_NAMESPACE, '', undefined, util.downcaseFirst(`${mappedType}ToRosTemplate`));
  }

  return new CodeName(
    typeName.packageName,
    '',
    util.downcaseFirst(`${typeName.namespace}${typeName.className}ToRosTemplate`),
  );
}

/**
 * Return the name for the type-checking method
 */
export function validatorName(typeName: CodeName): CodeName {
  if (typeName.packageName === '') {
    // Built-in or intrinsic type, built-in validators
    const validatedType = typeName.className === 'any' ? 'Any' : codemaker.toPascalCase(typeName.className);
    return new CodeName('', CORE_NAMESPACE, '', undefined, `validate${validatedType}`);
  }

  return new CodeName(typeName.packageName, '', `${util.joinIf(typeName.namespace, '_', typeName.className)}Validator`);
}

/**
 * Determine how we will render a attribute in the code
 *
 * This consists of:
 *
 * - The type we will generate for the attribute, including its base class and docs.
 * - The property name we will use to refer to the attribute.
 */
export function attributeDefinition(attributeName: string): Attribute {
  const descriptiveName = attributeName.replace(/\./g, '');
  const suffixName = codemaker.toPascalCase(rosTemplateToScriptName(descriptiveName));
  const propertyName = `attr${suffixName}`; // "attrArn"
  const constructorArguments = `this.getAtt('${attributeName}')`;
  return new Attribute(propertyName, 'string', constructorArguments);
}

/**
 * Convert a ROS template name to a nice TypeScript name
 *
 * We use a library to camelcase, and fix up some things that translate incorrectly.
 *
 * For example, the library breaks when pluralizing an abbreviation, such as "ProviderARNs" -> "providerArNs".
 *
 * We currently recognize "ARNs", "MBs" and "AZs".
 */
export function rosTemplateToScriptName(name: string): string {
  if (name === 'VPCs') {
    return 'vpcs';
  }
  const ret = codemaker.toCamelCase(name);

  const suffixes: { [key: string]: string } = { ARNs: 'Arns', MBs: 'MBs', AZs: 'AZs' };

  for (const suffix of Object.keys(suffixes)) {
    if (name.endsWith(suffix)) {
      return ret.substr(0, ret.length - suffix.length) + suffixes[suffix];
    }
  }

  return ret;
}

function specPrimitiveToCodePrimitive(type: schema.PrimitiveType): CodeName {
  switch (type) {
    case 'Boolean':
      return CodeName.forPrimitive('boolean');
    case 'Double':
      return CodeName.forPrimitive('number');
    case 'Integer':
      return CodeName.forPrimitive('number');
    case 'Number':
      return CodeName.forPrimitive('number');
    case 'Json':
      return CodeName.forPrimitive('any');
    case 'Long':
      return CodeName.forPrimitive('number');
    case 'String':
      return CodeName.forPrimitive('string');
    case 'Timestamp':
      return CodeName.forPrimitive('Date');
    case 'Any':
      return CodeName.forPrimitive('any');
    default:
      throw new Error(`Invalid primitive type: ${type}`);
  }
}

export function isPrimitive(type: CodeName): boolean {
  return (
    type.className === 'boolean' ||
    type.className === 'number' ||
    type.className === 'any' ||
    type.className === 'string' ||
    type.className === 'Date'
  );
}

function specTypeToCodeType(resourceContext: CodeName, type: string): CodeName {
  if (schema.isPrimitiveType(type)) {
    return specPrimitiveToCodePrimitive(type);
  } else if (type === 'Tag') {
    // Tags are not considered primitive by the spec (even though they are intrinsic)
    // so we won't consider them primitive either.
    return TAG_NAME;
  }

  const typeName = resourceContext.specName!.relativeName(type);
  return CodeName.forPropertyType(typeName, resourceContext);
}

/**
 * Translate a list of type references in a resource context to a list of code names
 */
export function specTypesToCodeTypes(resourceContext: CodeName, types: string[]): CodeName[] {
  return types.map((type) => specTypeToCodeType(resourceContext, type));
}

export interface PropertyVisitor<T> {
  /**
   * A single type (either built-in or complex)
   */
  visitAtom(type: CodeName): T;

  /**
   * A union of atomic types
   */
  visitAtomUnion(types: CodeName[]): T;

  /**
   * A list of atoms
   */
  visitList(itemType: CodeName): T;

  /**
   * List of unions
   */
  visitUnionList(itemTypes: CodeName[]): T;

  /**
   * Map of atoms
   */
  visitMap(itemType: CodeName): T;

  /**
   * Map of unions
   */
  visitUnionMap(itemTypes: CodeName[]): T;

  /**
   * Union of list type and atom type
   */
  visitListOrAtom(scalarTypes: CodeName[], itemTypes: CodeName[]): any;
}

/**
 * Invoke the right visitor method for the given property, depending on its type
 *
 * We use the term "atom" in this context to mean a type that can only accept a single
 * value of a given type. This is to contrast it with collections and unions.
 */
export function typeDispatch<T>(resourceContext: CodeName, spec: schema.Property, visitor: PropertyVisitor<T>): T {
  const scalarTypes = specTypesToCodeTypes(resourceContext, scalarTypeNames(spec));
  const itemTypes = specTypesToCodeTypes(resourceContext, itemTypeNames(spec));

  if (schema.isCollectionProperty(spec)) {
    // List or map, of either atoms or unions
    if (schema.isMapProperty(spec)) {
      if (itemTypes.length > 1) {
        return visitor.visitUnionMap(itemTypes);
      } else {
        return visitor.visitMap(itemTypes[0]);
      }
    } else {
      if (itemTypes.length > 1) {
        return visitor.visitUnionList(itemTypes);
      } else {
        return visitor.visitList(itemTypes[0]);
      }
    }
  }

  // Atom or union of atoms
  if (scalarTypes.length > 1) {
    return visitor.visitAtomUnion(scalarTypes);
  } else {
    return visitor.visitAtom(scalarTypes[0]);
  }
}
