using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless
{
    /// <summary>Represents a `App`.</summary>
    [JsiiInterface(nativeType: typeof(IApp), fullyQualifiedName: "@alicloud/ros-cdk-elasticsearchserverless.IApp")]
    public interface IApp : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InstanceId: The Id of the ElasticSearch serverless instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute PrivateESDomain: The private network domain of the app.</summary>
        [JsiiProperty(name: "attrPrivateEsDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateEsDomain
        {
            get;
        }

        /// <summary>Attribute PrivateKibanaDomain: The private network kibana domain of the app.</summary>
        [JsiiProperty(name: "attrPrivateKibanaDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateKibanaDomain
        {
            get;
        }

        /// <summary>Attribute PublicESDomain: The public network domain of the app.</summary>
        [JsiiProperty(name: "attrPublicEsDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicEsDomain
        {
            get;
        }

        /// <summary>Attribute PublicKibanaDomain: The public network kibana domain of the app.</summary>
        [JsiiProperty(name: "attrPublicKibanaDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicKibanaDomain
        {
            get;
        }

        /// <summary>Attribute Username: The username of the app.</summary>
        [JsiiProperty(name: "attrUsername", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUsername
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.AppProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless.IAppProps Props
        {
            get;
        }

        /// <summary>Represents a `App`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IApp), fullyQualifiedName: "@alicloud/ros-cdk-elasticsearchserverless.IApp")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless.IApp
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InstanceId: The Id of the ElasticSearch serverless instance.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateESDomain: The private network domain of the app.</summary>
            [JsiiProperty(name: "attrPrivateEsDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateEsDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateKibanaDomain: The private network kibana domain of the app.</summary>
            [JsiiProperty(name: "attrPrivateKibanaDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateKibanaDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicESDomain: The public network domain of the app.</summary>
            [JsiiProperty(name: "attrPublicEsDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicEsDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicKibanaDomain: The public network kibana domain of the app.</summary>
            [JsiiProperty(name: "attrPublicKibanaDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicKibanaDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Username: The username of the app.</summary>
            [JsiiProperty(name: "attrUsername", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUsername
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.AppProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless.IAppProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless.IAppProps>()!;
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
