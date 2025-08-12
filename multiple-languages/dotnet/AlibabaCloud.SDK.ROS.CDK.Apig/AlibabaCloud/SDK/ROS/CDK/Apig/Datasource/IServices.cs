using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig.Datasource
{
    /// <summary>Represents a `Services`.</summary>
    [JsiiInterface(nativeType: typeof(IServices), fullyQualifiedName: "@alicloud/ros-cdk-apig.datasource.IServices")]
    public interface IServices : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ServiceIds: The list of service IDs.</summary>
        [JsiiProperty(name: "attrServiceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceIds
        {
            get;
        }

        /// <summary>Attribute Services: The list of services.</summary>
        [JsiiProperty(name: "attrServices", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServices
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.datasource.ServicesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IServicesProps Props
        {
            get;
        }

        /// <summary>Represents a `Services`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServices), fullyQualifiedName: "@alicloud/ros-cdk-apig.datasource.IServices")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IServices
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ServiceIds: The list of service IDs.</summary>
            [JsiiProperty(name: "attrServiceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Services: The list of services.</summary>
            [JsiiProperty(name: "attrServices", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServices
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.datasource.ServicesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IServicesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IServicesProps>()!;
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
