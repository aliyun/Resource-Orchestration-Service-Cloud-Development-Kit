using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `VPC`.</summary>
    [JsiiInterface(nativeType: typeof(IVpc), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IVpc")]
    public interface IVpc : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute RouteTableId: The router table id of created VPC.</summary>
        [JsiiProperty(name: "attrRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteTableId
        {
            get;
        }

        /// <summary>Attribute VpcId: Id of created VPC.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VpcName: The name of VPC.</summary>
        [JsiiProperty(name: "attrVpcName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcName
        {
            get;
        }

        /// <summary>Attribute VRouterId: Router id of created VPC.</summary>
        [JsiiProperty(name: "attrVRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVRouterId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.VPCProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.IVPCProps Props
        {
            get;
        }

        /// <summary>Represents a `VPC`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpc), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IVpc")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IVpc
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute RouteTableId: The router table id of created VPC.</summary>
            [JsiiProperty(name: "attrRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: Id of created VPC.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcName: The name of VPC.</summary>
            [JsiiProperty(name: "attrVpcName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VRouterId: Router id of created VPC.</summary>
            [JsiiProperty(name: "attrVRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.VPCProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.IVPCProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.IVPCProps>()!;
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
