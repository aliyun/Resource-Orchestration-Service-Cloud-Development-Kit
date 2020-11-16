// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::VS::Group`
 */
export interface RosGroupProps {

    /**
     * @Property inProtocol: Access protocol used by the space.
     * Value: gb28181, rtmp
     */
    readonly inProtocol: string;

    /**
     * @Property name: Space name.
     */
    readonly name: string;

    /**
     * @Property outProtocol: Play protocol used by the space, multivalued separated by commas.
     * Value: flv, hls, rtmp
     */
    readonly outProtocol: string;

    /**
     * @Property playDomain: Use of the domain name space broadcast stream.
     */
    readonly playDomain: string;

    /**
     * @Property pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
     */
    readonly pushDomain: string;

    /**
     * @Property region: Space belongs to the region, as a service center.
     */
    readonly region: string;

    /**
     * @Property app: Application name space used, the default live.
     */
    readonly app?: string;

    /**
     * @Property callback: Updating the space callback device / flow state
     */
    readonly callback?: string;

    /**
     * @Property description: Space description.
     */
    readonly description?: string;

    /**
     * @Property enabled: Space is enabled.
     */
    readonly enabled?: boolean | ros.IResolvable;

    /**
     * @Property lazyPull: Whether to enable on-demand pull flow, default false
     */
    readonly lazyPull?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('app', ros.validateString)(properties.app));
    errors.collect(ros.propertyValidator('inProtocol', ros.requiredValidator)(properties.inProtocol));
    errors.collect(ros.propertyValidator('inProtocol', ros.validateString)(properties.inProtocol));
    errors.collect(ros.propertyValidator('callback', ros.validateString)(properties.callback));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('playDomain', ros.requiredValidator)(properties.playDomain));
    errors.collect(ros.propertyValidator('playDomain', ros.validateString)(properties.playDomain));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    errors.collect(ros.propertyValidator('region', ros.requiredValidator)(properties.region));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('pushDomain', ros.requiredValidator)(properties.pushDomain));
    errors.collect(ros.propertyValidator('pushDomain', ros.validateString)(properties.pushDomain));
    errors.collect(ros.propertyValidator('lazyPull', ros.validateBoolean)(properties.lazyPull));
    errors.collect(ros.propertyValidator('outProtocol', ros.requiredValidator)(properties.outProtocol));
    errors.collect(ros.propertyValidator('outProtocol', ros.validateString)(properties.outProtocol));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VS::Group` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VS::Group` resource.
 */
// @ts-ignore TS6133
function rosGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupPropsValidator(properties).assertSuccess();
    }
    return {
      InProtocol: ros.stringToRosTemplate(properties.inProtocol),
      Name: ros.stringToRosTemplate(properties.name),
      OutProtocol: ros.stringToRosTemplate(properties.outProtocol),
      PlayDomain: ros.stringToRosTemplate(properties.playDomain),
      PushDomain: ros.stringToRosTemplate(properties.pushDomain),
      Region: ros.stringToRosTemplate(properties.region),
      App: ros.stringToRosTemplate(properties.app),
      Callback: ros.stringToRosTemplate(properties.callback),
      Description: ros.stringToRosTemplate(properties.description),
      Enabled: ros.booleanToRosTemplate(properties.enabled),
      LazyPull: ros.booleanToRosTemplate(properties.lazyPull),
    };
}

/**
 * A ROS template type:  `ALIYUN::VS::Group`
 */
export class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VS::Group";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GbId: GB ID space provided. (Applies only to access the space marked States)
     */
    public readonly attrGbId: any;

    /**
     * @Attribute GbIp: GB signaling server address space provided. (Applies only to access the space marked States)
     */
    public readonly attrGbIp: any;

    /**
     * @Attribute GbPort: GB Port space provided. (Applies only to access the space marked States)
     */
    public readonly attrGbPort: any;

    /**
     * @Attribute Id: Space ID.
     */
    public readonly attrId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property inProtocol: Access protocol used by the space.
     * Value: gb28181, rtmp
     */
    public inProtocol: string;

    /**
     * @Property name: Space name.
     */
    public name: string;

    /**
     * @Property outProtocol: Play protocol used by the space, multivalued separated by commas.
     * Value: flv, hls, rtmp
     */
    public outProtocol: string;

    /**
     * @Property playDomain: Use of the domain name space broadcast stream.
     */
    public playDomain: string;

    /**
     * @Property pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
     */
    public pushDomain: string;

    /**
     * @Property region: Space belongs to the region, as a service center.
     */
    public region: string;

    /**
     * @Property app: Application name space used, the default live.
     */
    public app: string | undefined;

    /**
     * @Property callback: Updating the space callback device / flow state
     */
    public callback: string | undefined;

    /**
     * @Property description: Space description.
     */
    public description: string | undefined;

    /**
     * @Property enabled: Space is enabled.
     */
    public enabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property lazyPull: Whether to enable on-demand pull flow, default false
     */
    public lazyPull: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VS::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGbId = ros.Token.asString(this.getAtt('GbId'));
        this.attrGbIp = ros.Token.asString(this.getAtt('GbIp'));
        this.attrGbPort = ros.Token.asString(this.getAtt('GbPort'));
        this.attrId = ros.Token.asString(this.getAtt('Id'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.inProtocol = props.inProtocol;
        this.name = props.name;
        this.outProtocol = props.outProtocol;
        this.playDomain = props.playDomain;
        this.pushDomain = props.pushDomain;
        this.region = props.region;
        this.app = props.app;
        this.callback = props.callback;
        this.description = props.description;
        this.enabled = props.enabled;
        this.lazyPull = props.lazyPull;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            inProtocol: this.inProtocol,
            name: this.name,
            outProtocol: this.outProtocol,
            playDomain: this.playDomain,
            pushDomain: this.pushDomain,
            region: this.region,
            app: this.app,
            callback: this.callback,
            description: this.description,
            enabled: this.enabled,
            lazyPull: this.lazyPull,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
