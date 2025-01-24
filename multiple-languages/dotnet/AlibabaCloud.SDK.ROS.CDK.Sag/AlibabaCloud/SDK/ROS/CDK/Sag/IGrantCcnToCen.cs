using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Represents a `GrantCcnToCen`.</summary>
    [JsiiInterface(nativeType: typeof(IGrantCcnToCen), fullyQualifiedName: "@alicloud/ros-cdk-sag.IGrantCcnToCen")]
    public interface IGrantCcnToCen : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CcnInstanceId: The ID of the CCN instance.</summary>
        [JsiiProperty(name: "attrCcnInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCcnInstanceId
        {
            get;
        }

        /// <summary>Attribute CenInstanceId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "attrCenInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCenInstanceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-sag.GrantCcnToCenProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Sag.IGrantCcnToCenProps Props
        {
            get;
        }

        /// <summary>Represents a `GrantCcnToCen`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGrantCcnToCen), fullyQualifiedName: "@alicloud/ros-cdk-sag.IGrantCcnToCen")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IGrantCcnToCen
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CcnInstanceId: The ID of the CCN instance.</summary>
            [JsiiProperty(name: "attrCcnInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCcnInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CenInstanceId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "attrCenInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCenInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-sag.GrantCcnToCenProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Sag.IGrantCcnToCenProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Sag.IGrantCcnToCenProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
