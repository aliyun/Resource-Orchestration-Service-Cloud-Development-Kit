using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ECS::Instance`, which is used to create an Elastic Compute Service (ECS) instance.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.Instance), fullyQualifiedName: "@alicloud/ros-cdk-ecs.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Add one or more security groups to an ECS instance.</summary>
        /// <param name="securityGroups">Security groups or security group IDs.</param>
        [JsiiMethod(name: "addSecurityGroups", parametersJson: "[{\"docs\":{\"summary\":\"Security groups or security group IDs.\"},\"name\":\"securityGroups\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.SecurityGroup\"}]}},\"variadic\":true}]")]
        public virtual void AddSecurityGroups(params object[] securityGroups)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                for (var __idx_c762fc = 0 ; __idx_c762fc < securityGroups.Length ; __idx_c762fc++)
                {
                    switch (securityGroups[__idx_c762fc])
                    {
                        case string cast_777287:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Ecs.SecurityGroup cast_777287:
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected argument {nameof(securityGroups)}[{__idx_c762fc}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.SecurityGroup).FullName}; received null", nameof(securityGroups));
                        default:
                            throw new System.ArgumentException($"Expected argument {nameof(securityGroups)}[{__idx_c762fc}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.SecurityGroup).FullName}; received {securityGroups[__idx_c762fc].GetType().FullName}", nameof(securityGroups));
                    }
                }
            }
            InvokeInstanceVoidMethod(new System.Type[]{typeof(object[])}, new object[]{securityGroups});
        }

        /// <summary>Add one or more commands to the userdata of an ECS instance.</summary>
        /// <param name="commands">Commands to be added.</param>
        [JsiiMethod(name: "addUserDataCommands", parametersJson: "[{\"docs\":{\"summary\":\"Commands to be added.\"},\"name\":\"commands\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"variadic\":true}]")]
        public virtual void AddUserDataCommands(params object[] commands)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                for (var __idx_10f5f7 = 0 ; __idx_10f5f7 < commands.Length ; __idx_10f5f7++)
                {
                    switch (commands[__idx_10f5f7])
                    {
                        case string cast_aa1563:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_aa1563:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_aa1563:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected argument {nameof(commands)}[{__idx_10f5f7}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(commands));
                        default:
                            throw new System.ArgumentException($"Expected argument {nameof(commands)}[{__idx_10f5f7}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {commands[__idx_10f5f7].GetType().FullName}", nameof(commands));
                    }
                }
            }
            InvokeInstanceVoidMethod(new System.Type[]{typeof(object[])}, new object[]{commands});
        }

        /// <summary>Create prerequisite resource(s) required to an ECS instance: VPC, VSwitch, and(or) security group.</summary>
        /// <param name="zoneId">Required when creating a VSwitch.</param>
        /// <param name="vpcCidrBlock">Optional when creating a VPC.</param>
        /// <param name="vSwitchCidrBlock">Optional when creating a VSwitch.</param>
        /// <param name="whetherCreateSecurityGroup">Whether to create a security group.</param>
        [JsiiMethod(name: "autoCreateDependencies", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}}", parametersJson: "[{\"docs\":{\"summary\":\"Required when creating a VSwitch.\"},\"name\":\"zoneId\",\"optional\":true,\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"docs\":{\"remarks\":\"Default value is 192.168.0.0/16.\",\"summary\":\"Optional when creating a VPC.\"},\"name\":\"vpcCidrBlock\",\"optional\":true,\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"remarks\":\"Default value is 192.168.0.0/24.\",\"summary\":\"Optional when creating a VSwitch.\"},\"name\":\"vSwitchCidrBlock\",\"optional\":true,\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"remarks\":\"Default value is true.\",\"summary\":\"Whether to create a security group.\"},\"name\":\"whetherCreateSecurityGroup\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
        public virtual object[] AutoCreateDependencies(object? zoneId = null, string? vpcCidrBlock = null, string? vSwitchCidrBlock = null, bool? whetherCreateSecurityGroup = null)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (zoneId)
                {
                    case string cast_37c2d5:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_37c2d5:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_37c2d5:
                        // Not enough information to type-check...
                        break;
                    case null:
                        break;
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(zoneId)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {zoneId.GetType().FullName}", nameof(zoneId));
                }
            }
            return InvokeInstanceMethod<object[]>(new System.Type[]{typeof(object), typeof(string), typeof(string), typeof(bool)}, new object?[]{zoneId, vpcCidrBlock, vSwitchCidrBlock, whetherCreateSecurityGroup})!;
        }

        /// <summary>Attribute HostName: Host name of created instance.</summary>
        [JsiiProperty(name: "attrHostName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHostName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute InnerIp: Inner IP address of the specified instance.</summary>
        /// <remarks>
        /// Only for classical instance.
        /// </remarks>
        [JsiiProperty(name: "attrInnerIp", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInnerIp
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute InstanceId: The instance ID of created ecs instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInstanceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.</summary>
        [JsiiProperty(name: "attrPrimaryNetworkInterfaceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPrimaryNetworkInterfaceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute PrivateIp: Private IP address of created ecs instance.</summary>
        /// <remarks>
        /// Only for VPC instance.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIp", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPrivateIp
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute PublicIp: Public IP address of created ecs instance.</summary>
        [JsiiProperty(name: "attrPublicIp", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPublicIp
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SecurityGroupIds: Security group ID list of created instance.</summary>
        [JsiiProperty(name: "attrSecurityGroupIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSecurityGroupIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ZoneId: Zone ID of created instance.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrZoneId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.InstanceProps\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceProps>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
