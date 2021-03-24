using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::RouteTable`.</summary>
    [JsiiInterface(nativeType: typeof(IRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RouteTableProps")]
    public interface IRouteTableProps
    {
        /// <summary>Property vpcId: The ID of the VPC to which the custom route table belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
        string VpcId
        {
            get;
        }

        /// <summary>Property description: The description of the route table.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeTableName: The name of the route table.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "routeTableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RouteTableName
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::RouteTable`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RouteTableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRouteTableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The ID of the VPC to which the custom route table belongs.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
            public string VpcId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: The description of the route table.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property routeTableName: The name of the route table.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeTableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RouteTableName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to routetable.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}
