using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `Activation`.</summary>
    [JsiiInterface(nativeType: typeof(IActivation), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IActivation")]
    public interface IActivation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ActivationId: Activation code ID.</summary>
        [JsiiProperty(name: "attrActivationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrActivationId
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the activation code was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DeregisteredCount: The number of instances that have been logged out.</summary>
        [JsiiProperty(name: "attrDeregisteredCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeregisteredCount
        {
            get;
        }

        /// <summary>Attribute Description: The description of the activation code.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute Disabled: Indicates whether the activation code is disabled.</summary>
        [JsiiProperty(name: "attrDisabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisabled
        {
            get;
        }

        /// <summary>Attribute InstanceCount: The maximum number of times that the activation code can be used to register managed instances.</summary>
        [JsiiProperty(name: "attrInstanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceCount
        {
            get;
        }

        /// <summary>Attribute InstanceName: The default prefix of the instance name.</summary>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceName
        {
            get;
        }

        /// <summary>Attribute IpAddressRange: The IP address of the host that allows the activation code to be used.</summary>
        [JsiiProperty(name: "attrIpAddressRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpAddressRange
        {
            get;
        }

        /// <summary>Attribute RegisteredCount: The number of instances that were registered.</summary>
        [JsiiProperty(name: "attrRegisteredCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRegisteredCount
        {
            get;
        }

        /// <summary>Attribute TimeToLiveInHours: The validity period of the activation code.</summary>
        /// <remarks>
        /// Unit: hours.
        /// </remarks>
        [JsiiProperty(name: "attrTimeToLiveInHours", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTimeToLiveInHours
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.ActivationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IActivationProps Props
        {
            get;
        }

        /// <summary>Represents a `Activation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IActivation), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IActivation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IActivation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ActivationId: Activation code ID.</summary>
            [JsiiProperty(name: "attrActivationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrActivationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the activation code was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeregisteredCount: The number of instances that have been logged out.</summary>
            [JsiiProperty(name: "attrDeregisteredCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeregisteredCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the activation code.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Disabled: Indicates whether the activation code is disabled.</summary>
            [JsiiProperty(name: "attrDisabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceCount: The maximum number of times that the activation code can be used to register managed instances.</summary>
            [JsiiProperty(name: "attrInstanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceName: The default prefix of the instance name.</summary>
            [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpAddressRange: The IP address of the host that allows the activation code to be used.</summary>
            [JsiiProperty(name: "attrIpAddressRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpAddressRange
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RegisteredCount: The number of instances that were registered.</summary>
            [JsiiProperty(name: "attrRegisteredCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRegisteredCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TimeToLiveInHours: The validity period of the activation code.</summary>
            /// <remarks>
            /// Unit: hours.
            /// </remarks>
            [JsiiProperty(name: "attrTimeToLiveInHours", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTimeToLiveInHours
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.ActivationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IActivationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IActivationProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
