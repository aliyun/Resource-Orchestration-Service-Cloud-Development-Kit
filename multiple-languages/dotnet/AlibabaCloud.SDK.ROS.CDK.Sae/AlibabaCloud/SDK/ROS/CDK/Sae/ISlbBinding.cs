using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Represents a `SlbBinding`.</summary>
    [JsiiInterface(nativeType: typeof(ISlbBinding), fullyQualifiedName: "@alicloud/ros-cdk-sae.ISlbBinding")]
    public interface ISlbBinding : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AppId: Successful application deployment target ID.</summary>
        [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppId
        {
            get;
        }

        /// <summary>Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.</summary>
        [JsiiProperty(name: "attrChangeOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChangeOrderId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-sae.SlbBindingProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Sae.ISlbBindingProps Props
        {
            get;
        }

        /// <summary>Represents a `SlbBinding`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISlbBinding), fullyQualifiedName: "@alicloud/ros-cdk-sae.ISlbBinding")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.ISlbBinding
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AppId: Successful application deployment target ID.</summary>
            [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.</summary>
            [JsiiProperty(name: "attrChangeOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChangeOrderId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-sae.SlbBindingProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Sae.ISlbBindingProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Sae.ISlbBindingProps>()!;
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
