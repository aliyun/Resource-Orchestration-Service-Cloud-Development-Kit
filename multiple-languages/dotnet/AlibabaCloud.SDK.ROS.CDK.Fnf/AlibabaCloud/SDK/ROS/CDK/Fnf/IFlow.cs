using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    /// <summary>Represents a `Flow`.</summary>
    [JsiiInterface(nativeType: typeof(IFlow), fullyQualifiedName: "@alicloud/ros-cdk-fnf.IFlow")]
    public interface IFlow : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreatedTime: Flow creation time.</summary>
        [JsiiProperty(name: "attrCreatedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedTime
        {
            get;
        }

        /// <summary>Attribute Id: The unique ID of the flow.</summary>
        [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrId
        {
            get;
        }

        /// <summary>Attribute LastModifiedTime: The most recently modified time of the flow.</summary>
        [JsiiProperty(name: "attrLastModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastModifiedTime
        {
            get;
        }

        /// <summary>Attribute Name: The name of the flow created.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fnf.FlowProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Fnf.IFlowProps Props
        {
            get;
        }

        /// <summary>Represents a `Flow`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFlow), fullyQualifiedName: "@alicloud/ros-cdk-fnf.IFlow")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.IFlow
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreatedTime: Flow creation time.</summary>
            [JsiiProperty(name: "attrCreatedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Id: The unique ID of the flow.</summary>
            [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastModifiedTime: The most recently modified time of the flow.</summary>
            [JsiiProperty(name: "attrLastModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastModifiedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Name: The name of the flow created.</summary>
            [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fnf.FlowProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Fnf.IFlowProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fnf.IFlowProps>()!;
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
