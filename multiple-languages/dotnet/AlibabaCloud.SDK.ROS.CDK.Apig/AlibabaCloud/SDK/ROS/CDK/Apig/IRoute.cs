using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Represents a `Route`.</summary>
    [JsiiInterface(nativeType: typeof(IRoute), fullyQualifiedName: "@alicloud/ros-cdk-apig.IRoute")]
    public interface IRoute : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Backend: Backend services.</summary>
        [JsiiProperty(name: "attrBackend", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackend
        {
            get;
        }

        /// <summary>Attribute Description: The description of route resource.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DomainInfos: Domain items.</summary>
        [JsiiProperty(name: "attrDomainInfos", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainInfos
        {
            get;
        }

        /// <summary>Attribute EnvironmentInfo: Environment information.</summary>
        [JsiiProperty(name: "attrEnvironmentInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentInfo
        {
            get;
        }

        /// <summary>Attribute Match: The match rule of route resource.</summary>
        [JsiiProperty(name: "attrMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMatch
        {
            get;
        }

        /// <summary>Attribute RouteId: The ID of route resource.</summary>
        [JsiiProperty(name: "attrRouteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteId
        {
            get;
        }

        /// <summary>Attribute RouteName: The name of the route.</summary>
        [JsiiProperty(name: "attrRouteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.RouteProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apig.IRouteProps Props
        {
            get;
        }

        /// <summary>Represents a `Route`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRoute), fullyQualifiedName: "@alicloud/ros-cdk-apig.IRoute")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IRoute
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Backend: Backend services.</summary>
            [JsiiProperty(name: "attrBackend", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackend
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of route resource.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainInfos: Domain items.</summary>
            [JsiiProperty(name: "attrDomainInfos", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainInfos
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentInfo: Environment information.</summary>
            [JsiiProperty(name: "attrEnvironmentInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Match: The match rule of route resource.</summary>
            [JsiiProperty(name: "attrMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMatch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouteId: The ID of route resource.</summary>
            [JsiiProperty(name: "attrRouteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouteName: The name of the route.</summary>
            [JsiiProperty(name: "attrRouteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.RouteProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apig.IRouteProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.IRouteProps>()!;
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
