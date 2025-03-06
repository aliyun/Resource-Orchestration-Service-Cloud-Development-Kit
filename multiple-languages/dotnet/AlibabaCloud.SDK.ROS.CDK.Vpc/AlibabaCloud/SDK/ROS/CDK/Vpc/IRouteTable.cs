using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `RouteTable`.</summary>
    [JsiiInterface(nativeType: typeof(IRouteTable), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IRouteTable")]
    public interface IRouteTable : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute RouteTableId: The ID of the route table.</summary>
        [JsiiProperty(name: "attrRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteTableId
        {
            get;
        }

        /// <summary>Attribute RouteTableName: The name of the route table.</summary>
        [JsiiProperty(name: "attrRouteTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteTableName
        {
            get;
        }

        /// <summary>Attribute RouteTableType: The type of the route table.</summary>
        [JsiiProperty(name: "attrRouteTableType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteTableType
        {
            get;
        }

        /// <summary>Attribute VpcId: The ID of the VRouter to which the route table belongs.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchIds: A list of VSwitches under the VPC.</summary>
        [JsiiProperty(name: "attrVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.RouteTableProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IRouteTableProps Props
        {
            get;
        }

        /// <summary>Represents a `RouteTable`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRouteTable), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IRouteTable")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRouteTable
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute RouteTableId: The ID of the route table.</summary>
            [JsiiProperty(name: "attrRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouteTableName: The name of the route table.</summary>
            [JsiiProperty(name: "attrRouteTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteTableName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouteTableType: The type of the route table.</summary>
            [JsiiProperty(name: "attrRouteTableType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteTableType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The ID of the VRouter to which the route table belongs.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchIds: A list of VSwitches under the VPC.</summary>
            [JsiiProperty(name: "attrVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.RouteTableProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IRouteTableProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IRouteTableProps>()!;
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
