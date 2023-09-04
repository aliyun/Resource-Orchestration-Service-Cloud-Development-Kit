using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::Activation`.</summary>
    [JsiiInterface(nativeType: typeof(IActivationProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ActivationProps")]
    public interface IActivationProps
    {
        /// <summary>Property description: The description of the activation code.</summary>
        /// <remarks>
        /// It must be 1 to 100 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceCount: The maximum number of times that you can use the activation code to register managed instances.</summary>
        /// <remarks>
        /// Valid values: 1 to 1000.Default value: 10.
        /// </remarks>
        [JsiiProperty(name: "instanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceName: The default instance name prefix.</summary>
        /// <remarks>
        /// The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName xmlns="http://www.w3.org/1999/xhtml"></InstanceName>-<Number xmlns="http://www.w3.org/1999/xhtml"></Number> is generated. The number of digits in the <Number xmlns="http://www.w3.org/1999/xhtml"></Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code.</summary>
        /// <remarks>
        /// The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
        /// </remarks>
        [JsiiProperty(name: "ipAddressRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpAddressRange
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosActivation.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosActivation.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeToLiveInHours: The validity period of the activation code.</summary>
        /// <remarks>
        /// The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
        /// </remarks>
        [JsiiProperty(name: "timeToLiveInHours", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeToLiveInHours
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::Activation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IActivationProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ActivationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IActivationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property description: The description of the activation code.</summary>
            /// <remarks>
            /// It must be 1 to 100 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceCount: The maximum number of times that you can use the activation code to register managed instances.</summary>
            /// <remarks>
            /// Valid values: 1 to 1000.Default value: 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceName: The default instance name prefix.</summary>
            /// <remarks>
            /// The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName xmlns="http://www.w3.org/1999/xhtml"></InstanceName>-<Number xmlns="http://www.w3.org/1999/xhtml"></Number> is generated. The number of digits in the <Number xmlns="http://www.w3.org/1999/xhtml"></Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code.</summary>
            /// <remarks>
            /// The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipAddressRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpAddressRange
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosActivation.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosActivation.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosActivation.ITagsProperty[]?>();
            }

            /// <summary>Property timeToLiveInHours: The validity period of the activation code.</summary>
            /// <remarks>
            /// The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeToLiveInHours", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeToLiveInHours
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
