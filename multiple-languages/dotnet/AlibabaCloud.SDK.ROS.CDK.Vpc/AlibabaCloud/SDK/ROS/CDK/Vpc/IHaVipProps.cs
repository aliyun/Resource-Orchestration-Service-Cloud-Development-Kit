using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `HaVip`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havip
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHaVipProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.HaVipProps")]
    public interface IHaVipProps
    {
        /// <summary>Property vSwitchId: The ID of the vSwitch to which the HAVIP belongs.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property description: The description of the HAVIP.</summary>
        /// <remarks>
        /// The description must be 1 to 256 characters in length and cannot start with http:// or https://.
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

        /// <summary>Property ipAddress: The IP address of the HAVIP.</summary>
        /// <remarks>
        /// The specified IP address must be an idle IP address that falls within the CIDR block of the vSwitch. If this parameter is not set, an idle IP address from the CIDR block of the vSwitch is randomly assigned to the HAVIP.
        /// </remarks>
        [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the HAVIP.</summary>
        /// <remarks>
        /// The name must be 1 to 128 characters in length, and cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the HAVIP belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosHaVip.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosHaVip.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `HaVip`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havip
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHaVipProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.HaVipProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IHaVipProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vSwitchId: The ID of the vSwitch to which the HAVIP belongs.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the HAVIP.</summary>
            /// <remarks>
            /// The description must be 1 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipAddress: The IP address of the HAVIP.</summary>
            /// <remarks>
            /// The specified IP address must be an idle IP address that falls within the CIDR block of the vSwitch. If this parameter is not set, an idle IP address from the CIDR block of the vSwitch is randomly assigned to the HAVIP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the HAVIP.</summary>
            /// <remarks>
            /// The name must be 1 to 128 characters in length, and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the HAVIP belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosHaVip.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosHaVip.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosHaVip.ITagsProperty[]?>();
            }
        }
    }
}
