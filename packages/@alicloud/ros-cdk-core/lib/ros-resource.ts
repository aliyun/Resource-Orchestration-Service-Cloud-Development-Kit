import { RosDeletionPolicy } from "./ros-resource-policy";
import { capitalizePropertyNames, ignoreEmpty, PostResolveToken } from "./util";
import { Construct, IConstruct } from "./construct-compat";
import { TagManager } from "./tag-manager";
import { Reference } from "./reference";
import { addDependency } from "./deps";
import { RosReference } from "./private/ros-reference";
import { RemovalPolicy, RemovalPolicyOptions } from "./ros-removal-policy";
import { RosCondition } from "./ros-condition";
import { RosRefElement } from "./ros-element";
import {IResolvable} from "./resolvable";
export interface RosResourceProps {
  /**
   * ROS template resource type (e.g. `ALIYUN::ECS::Instance`).
   */
  readonly type: string;

  /**
   * Resource properties.
   *
   * @default - No resource properties.
   */
  readonly properties?: { [name: string]: any };
}

/**
 * Represents a ROS resource.
 */
export class RosResource extends RosRefElement {
  /**
   * Check whether the given construct is a RosResource
   */
  public static isRosResource(construct: IConstruct): construct is RosResource {
    return (construct as any).rosResourceType !== undefined;
  }

  // MAINTAINERS NOTE: this class serves as the base class for the generated L1
  // ("ALIYUN") resources (such as `ecs.Instance`). These resources will have a
  // property for each ROS property of the resource. This means that
  // if at some point in the future a property is introduced with a name similar
  // to one of the properties here, it will be "masked" by the derived class. To
  // that end, we prefix all properties in this class with `rosXxx` with the
  // hope to avoid those conflicts in the future.

  /**
   * Options for this resource, such as condition, update policy etc.
   */
  public readonly rosOptions: IRosResourceOptions = {};

  /**
   * ROS resource type.
   */
  public readonly rosResourceType: string;

  /**
   * Aliyun resource properties.
   * @internal
   */
  protected readonly _rosProperties: any;

  /**
   * An object to be merged on top of the entire resource definition.
   */
  private readonly rawOverrides: any = {};

  /**
   * Logical IDs of dependencies.
   *
   * Is filled during prepare().
   */
  private readonly dependsOn = new Set<RosResource>();
  private readonly id: string;
  private readonly rosDependsOn = new Set<string>();

  /**
   * Creates a resource construct.
   * @param rosResourceType The ROS type of this resource (e.g. ALIYUN::ECS::Instance)
   */
  constructor(scope: Construct, id: string, props: RosResourceProps) {
    super(scope, id);
    this.id = id;
    if (!props.type) {
      throw new Error("The `type` property is required");
    }

    this.rosResourceType = props.type;
    this._rosProperties = props.properties || {};
  }

  /**
   * Sets the deletion policy of the resource based on the removal policy specified.
   */
  public applyRemovalPolicy(
    policy: RemovalPolicy | undefined,
    options: RemovalPolicyOptions = {}
  ) {
    policy = policy || options.defaultPolicy || RemovalPolicy.RETAIN;

    let deletionPolicy;

    switch (policy) {
      case RemovalPolicy.DESTROY:
        deletionPolicy = RosDeletionPolicy.DELETE;
        break;

      case RemovalPolicy.RETAIN:
        deletionPolicy = RosDeletionPolicy.RETAIN;
        break;

      default:
        throw new Error(`Invalid removal policy: ${policy}`);
    }

    this.rosOptions.deletionPolicy = deletionPolicy;
    // if (options.applyToUpdateReplacePolicy !== false) {
    //   this.rosOptions.updateReplacePolicy = deletionPolicy;
    // }
  }

  /**
   * Returns a token for an runtime attribute of this resource.
   * Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
   * in case there is no generated attribute.
   * @param attributeName The name of the attribute.
   */
  public getAtt(attributeName: string): Reference {
    return RosReference.for(this, attributeName);
  }

  /**
   * Adds an override to the synthesized ROS resource. To add a
   * property override, either use `addPropertyOverride` or prefix `path` with
   * "Properties." (i.e. `Properties.TopicName`).
   *
   * If the override is nested, separate each nested level using a dot (.) in the path parameter.
   * If there is an array as part of the nesting, specify the index in the path.
   *
   * For example,
   * ```typescript
   * addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
   * addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')
   * ```
   * would add the overrides
   * ```json
   * "Properties": {
   *   "GlobalSecondaryIndexes": [
   *     {
   *       "Projection": {
   *         "NonKeyAttributes": [ "myattribute" ]
   *         ...
   *       }
   *       ...
   *     },
   *     {
   *       "ProjectionType": "INCLUDE"
   *       ...
   *     },
   *   ]
   *   ...
   * }
   * ```
   *
   * @param path - The path of the property, you can use dot notation to
   *        override values in complex types. Any intermdediate keys
   *        will be created as needed.
   * @param value - The value. Could be primitive or complex.
   */
  public addOverride(path: string, value: any) {
    const parts = path.split(".");
    let curr: any = this.rawOverrides;

    while (parts.length > 1) {
      const key = parts.shift()!;

      // if we can't recurse further or the previous value is not an
      // object overwrite it with an object.
      const isObject =
        curr[key] != null &&
        typeof curr[key] === "object" &&
        !Array.isArray(curr[key]);
      if (!isObject) {
        curr[key] = {};
      }

      curr = curr[key];
    }

    const lastKey = parts.shift()!;
    curr[lastKey] = value;
  }

  /**
   * Syntactic sugar for `addOverride(path, undefined)`.
   * @param path The path of the value to delete
   */
  public addDeletionOverride(path: string) {
    this.addOverride(path, undefined);
  }

  public addMetaData(key: string, value: any) {
    if (!this.rosOptions.metadata) {
      this.rosOptions.metadata = {};
    }
    this.rosOptions.metadata[key] = value;
  }

  public addDesc(desc: string) {
    this.rosOptions.description = desc;
  }

  public addCondition(con: RosCondition) {
    this.rosOptions.condition = con;
  }

  public addCount(count: number | IResolvable) {
    this.rosOptions.count = count;
  }

  /**
   * Adds an override to a resource property.
   *
   * Syntactic sugar for `addOverride("Properties.<...>", value)`.
   *
   * @param propertyPath The path of the property
   * @param value The value
   */
  public addPropertyOverride(propertyPath: string, value: any) {
    this.addOverride(`Properties.${propertyPath}`, value);
  }

  /**
   * Adds an override that deletes the value of a property from the resource definition.
   * @param propertyPath The path to the property.
   */
  public addPropertyDeletionOverride(propertyPath: string) {
    this.addPropertyOverride(propertyPath, undefined);
  }

  /**
   * Indicates that this resource depends on another resource and cannot be
   * provisioned unless the other resource has been successfully provisioned.
   *
   * This can be used for resources across stacks (or nested stack) boundaries
   * and the dependency will automatically be transferred to the relevant scope.
   */
  public addDependsOn(target: RosResource) {
    addDependency(
      this,
      target,
      `"${this.node.path}" depends on "${target.node.path}"`
    );
  }

  /**
   * @returns a string representation of this resource
   */
  public toString() {
    return `${super.toString()} [${this.rosResourceType}]`;
  }

  /**
   * Called by the `addDependency` helper function in order to realize a direct
   * dependency between two resources that are directly defined in the same
   * stacks.
   *
   * Use `resource.addDependsOn` to define the dependency between two resources,
   * which also takes stack boundaries into account.
   *
   * @internal
   */
  public _addResourceDependency(target: RosResource) {
    this.dependsOn.add(target);
  }

  public addRosDependency(target: string) {
    // target.forEach(x => this.rosDependsOn.add(x));
    this.rosDependsOn.add(target);
  }

  /**
   * Emits ROS template for this resource.
   * @internal
   */
  public _toRosTemplate(): object {
    try {
      const ret = {
        Resources: {
          // Post-Resolve operation since otherwise deepMerge is going to mix values into
          // the Token objects returned by ignoreEmpty.
          [this.id]: new PostResolveToken(
            {
              Type: this.rosResourceType,
              Properties: ignoreEmpty(this.rosProperties),
              DependsOn: ignoreEmpty(renderRosDependsOn(this.rosDependsOn)),
              // UpdatePolicy: capitalizePropertyNames(this, this.rosOptions.updatePolicy),
              // UpdateReplacePolicy: capitalizePropertyNames(this, this.rosOptions.updateReplacePolicy),
              DeletionPolicy: capitalizePropertyNames(
                this,
                this.rosOptions.deletionPolicy
              ),
              Metadata: ignoreEmpty(this.rosOptions.metadata),
              Description: ignoreEmpty(this.rosOptions.description),
              Condition:
                this.rosOptions.condition &&
                this.rosOptions.condition.logicalId,
              Count: ignoreEmpty(this.rosOptions.count),
            },
            (props) => {
              const renderedProps = this.renderProperties(
                props.Properties || {}
              );
              props.Properties =
                renderedProps &&
                (Object.values(renderedProps).find((v) => !!v)
                  ? renderedProps
                  : undefined);
              return deepMerge(props, this.rawOverrides);
            }
          ),
        },
      };
      return ret;
    } catch (e) {
      // Change message
      e.message = `While synthesizing ${this.node.path}: ${e.message}`;
      // Adjust stack trace (make it look like node built it, too...)
      const trace = this.creationStack;
      if (trace) {
        const creationStack = ["--- resource created at ---", ...trace].join(
          "\n  at "
        );
        const problemTrace = e.stack.substr(
          e.stack.indexOf(e.message) + e.message.length
        );
        e.stack = `${e.message}\n  ${creationStack}\n  --- problem discovered at ---${problemTrace}`;
      }

      // Re-throw
      throw e;
    }

    function renderRosDependsOn(rosDependsOn: Set<string>) {
      return Array.from(rosDependsOn);
    }
  }

  protected get rosProperties(): { [key: string]: any } {
    const props = this._rosProperties || {};
    if (TagManager.isTaggable(this)) {
      const tagsProp: { [key: string]: any } = {};
      tagsProp[this.tags.tagPropertyName] = this.tags.renderTags();
      return deepMerge(props, tagsProp);
    }
    return props;
  }

  protected renderProperties(props: {
    [key: string]: any;
  }): { [key: string]: any } {
    return props;
  }

  /**
   * Return properties modified after initiation
   *
   * Resources that expose mutable properties should override this function to
   * collect and return the properties object for this resource.
   */
  protected get updatedProperites(): { [key: string]: any } {
    return this._rosProperties;
  }

  protected validateProperties(_properties: any) {
    // Nothing
  }
}

export interface IRosResourceOptions {
  /**
   * A condition to associate with this resource. This means that only if the condition evaluates to 'true' when the stack
   * is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
   * there is no need to use it in CDK projects.
   */
  condition?: RosCondition;

  /**
   * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
   * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
   * attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
   * that lead to resources being removed.
   */
  deletionPolicy?: RosDeletionPolicy;

  /**
   * Metadata associated with the ROS resource. This is not the same as the construct metadata which can be added
   * using construct.addMetadata(), but would not appear in the ROS template automatically.
   */
  metadata?: { [key: string]: any };

  description?: string;

  count?: number | IResolvable;
}

/**
 * Merges `source` into `target`, overriding any existing values.
 * `null`s will cause a value to be deleted.
 */
function deepMerge(target: any, ...sources: any[]) {
  for (const source of sources) {
    if (typeof source !== "object" || typeof target !== "object") {
      throw new Error(
        `Invalid usage. Both source (${JSON.stringify(
          source
        )}) and target (${JSON.stringify(target)}) must be objects`
      );
    }

    for (const key of Object.keys(source)) {
      const value = source[key];
      if (typeof value === "object" && value != null && !Array.isArray(value)) {
        // if the value at the target is not an object, override it with an
        // object so we can continue the recursion
        if (typeof target[key] !== "object") {
          target[key] = {};
        }

        deepMerge(target[key], value);

        // if the result of the merge is an empty object, it's because the
        // eventual value we assigned is `undefined`, and there are no
        // sibling concrete values alongside, so we can delete this tree.
        const output = target[key];
        if (typeof output === "object" && Object.keys(output).length === 0) {
          delete target[key];
        }
      } else if (value === undefined) {
        delete target[key];
      } else {
        target[key] = value;
      }
    }
  }

  return target;
}
