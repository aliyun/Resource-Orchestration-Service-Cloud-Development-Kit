using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `AnycastEIPAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IAnycastEIPAssociation), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IAnycastEIPAssociation")]
    public interface IAnycastEIPAssociation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AnycastId: Anycast EIP instance ID.</summary>
        [JsiiProperty(name: "attrAnycastId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAnycastId
        {
            get;
        }

        /// <summary>Attribute BindInstanceId: The ID of the cloud resource instance to be bound.</summary>
        [JsiiProperty(name: "attrBindInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBindInstanceId
        {
            get;
        }

        /// <summary>Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.</summary>
        [JsiiProperty(name: "attrBindInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBindInstanceRegionId
        {
            get;
        }

        /// <summary>Attribute BindInstanceType: The cloud resource instance type to be bound.</summary>
        [JsiiProperty(name: "attrBindInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBindInstanceType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IAnycastEIPAssociationProps Props
        {
            get;
        }

        /// <summary>Represents a `AnycastEIPAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAnycastEIPAssociation), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IAnycastEIPAssociation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IAnycastEIPAssociation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AnycastId: Anycast EIP instance ID.</summary>
            [JsiiProperty(name: "attrAnycastId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAnycastId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BindInstanceId: The ID of the cloud resource instance to be bound.</summary>
            [JsiiProperty(name: "attrBindInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBindInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.</summary>
            [JsiiProperty(name: "attrBindInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBindInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BindInstanceType: The cloud resource instance type to be bound.</summary>
            [JsiiProperty(name: "attrBindInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBindInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IAnycastEIPAssociationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IAnycastEIPAssociationProps>()!;
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
