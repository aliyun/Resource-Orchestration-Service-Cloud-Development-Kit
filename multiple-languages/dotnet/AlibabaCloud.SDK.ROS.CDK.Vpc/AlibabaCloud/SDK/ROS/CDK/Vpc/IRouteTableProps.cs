using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RouteTable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RouteTableProps")]
    public interface IRouteTableProps
    {
        /// <summary>Property vpcId: The ID of the VPC to which the custom route table belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property associateType: The type of the route table.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>VSwitch (default): vSwitch route table</description>
        /// <description>Gateway: gateway route table</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "associateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AssociateType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the route table.</summary>
        /// <remarks>
        /// The description must be 1 to 256 characters in length, and cannot start with
        /// <c>http:\/\/</c> or <c>https:\/\/</c>.
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

        /// <summary>Property routeTableName: The name of the route table.</summary>
        /// <remarks>
        /// The name must be 1 to 128 characters in length, and cannot start with <c>http:\/\/</c>
        /// or <c>https:\/\/</c>.
        /// </remarks>
        [JsiiProperty(name: "routeTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteTableName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to routetable.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosRouteTable.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosRouteTable.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RouteTable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RouteTableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRouteTableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The ID of the VPC to which the custom route table belongs.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property associateType: The type of the route table.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>VSwitch (default): vSwitch route table</description>
            /// <description>Gateway: gateway route table</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "associateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AssociateType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the route table.</summary>
            /// <remarks>
            /// The description must be 1 to 256 characters in length, and cannot start with
            /// <c>http:\/\/</c> or <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeTableName: The name of the route table.</summary>
            /// <remarks>
            /// The name must be 1 to 128 characters in length, and cannot start with <c>http:\/\/</c>
            /// or <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteTableName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to routetable.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosRouteTable.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosRouteTable.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosRouteTable.ITagsProperty[]?>();
            }
        }
    }
}
