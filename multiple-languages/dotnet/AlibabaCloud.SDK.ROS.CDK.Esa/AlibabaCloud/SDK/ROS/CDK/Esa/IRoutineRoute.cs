using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `RoutineRoute`.</summary>
    [JsiiInterface(nativeType: typeof(IRoutineRoute), fullyQualifiedName: "@alicloud/ros-cdk-esa.IRoutineRoute")]
    public interface IRoutineRoute : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Bypass: Bypass mode.</summary>
        [JsiiProperty(name: "attrBypass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBypass
        {
            get;
        }

        /// <summary>Attribute ConfigId: The configuration ID.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigId
        {
            get;
        }

        /// <summary>Attribute ConfigType: The configuration type.</summary>
        /// <remarks>
        /// You can use this parameter to check the global configuration or rule configuration.
        /// </remarks>
        [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigType
        {
            get;
        }

        /// <summary>Attribute Fallback: An exception to the origin server switch will be enabled.</summary>
        /// <remarks>
        /// If an exception occurs in the function, such as CPU usage exceeding limits, a request will be made to return to the origin server.
        /// </remarks>
        [JsiiProperty(name: "attrFallback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFallback
        {
            get;
        }

        /// <summary>Attribute Mode: Configuration mode.</summary>
        [JsiiProperty(name: "attrMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMode
        {
            get;
        }

        /// <summary>Attribute RouteEnable: Routing switch.</summary>
        [JsiiProperty(name: "attrRouteEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteEnable
        {
            get;
        }

        /// <summary>Attribute RouteName: The route name.</summary>
        [JsiiProperty(name: "attrRouteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteName
        {
            get;
        }

        /// <summary>Attribute RoutineName: The edge function Routine name.</summary>
        [JsiiProperty(name: "attrRoutineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRoutineName
        {
            get;
        }

        /// <summary>Attribute Rule: The content of the rule.</summary>
        [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRule
        {
            get;
        }

        /// <summary>Attribute Sequence: Rule execution order.</summary>
        [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSequence
        {
            get;
        }

        /// <summary>Attribute SiteVersion: Version number of the site.</summary>
        [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteVersion
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.RoutineRouteProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IRoutineRouteProps Props
        {
            get;
        }

        /// <summary>Represents a `RoutineRoute`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRoutineRoute), fullyQualifiedName: "@alicloud/ros-cdk-esa.IRoutineRoute")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRoutineRoute
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Bypass: Bypass mode.</summary>
            [JsiiProperty(name: "attrBypass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBypass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigId: The configuration ID.</summary>
            [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigType: The configuration type.</summary>
            /// <remarks>
            /// You can use this parameter to check the global configuration or rule configuration.
            /// </remarks>
            [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Fallback: An exception to the origin server switch will be enabled.</summary>
            /// <remarks>
            /// If an exception occurs in the function, such as CPU usage exceeding limits, a request will be made to return to the origin server.
            /// </remarks>
            [JsiiProperty(name: "attrFallback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFallback
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Mode: Configuration mode.</summary>
            [JsiiProperty(name: "attrMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouteEnable: Routing switch.</summary>
            [JsiiProperty(name: "attrRouteEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouteName: The route name.</summary>
            [JsiiProperty(name: "attrRouteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RoutineName: The edge function Routine name.</summary>
            [JsiiProperty(name: "attrRoutineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRoutineName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Rule: The content of the rule.</summary>
            [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Sequence: Rule execution order.</summary>
            [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSequence
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteVersion: Version number of the site.</summary>
            [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.RoutineRouteProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IRoutineRouteProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IRoutineRouteProps>()!;
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
