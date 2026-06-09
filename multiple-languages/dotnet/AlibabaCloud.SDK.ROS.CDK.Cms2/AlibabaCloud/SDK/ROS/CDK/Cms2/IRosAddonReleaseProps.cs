using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2
{
    /// <summary>Properties for defining a `RosAddonRelease`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAddonReleaseProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.RosAddonReleaseProps")]
    public interface IRosAddonReleaseProps
    {
        /// <remarks>
        /// <strong>Property</strong>: addonName: The name of the add-on.
        /// </remarks>
        [JsiiProperty(name: "addonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddonName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: addonVersion: The version of the add-on.
        /// </remarks>
        [JsiiProperty(name: "addonVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddonVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyId: The ID of the integration policy.
        /// </remarks>
        [JsiiProperty(name: "policyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: entityRules: Entity discovery rules model.
        /// </remarks>
        [JsiiProperty(name: "entityRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms2.RosAddonRelease.EntityRulesProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EntityRules
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: envType: The environment type.
        /// </remarks>
        [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: lang: The language of the add-on.
        /// </remarks>
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lang
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: parentAddonReleaseId: The ID of the parent add-on release.
        /// </remarks>
        [JsiiProperty(name: "parentAddonReleaseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParentAddonReleaseId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: releaseName: The name of the add-on release.
        /// </remarks>
        [JsiiProperty(name: "releaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReleaseName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: values: The values of the add-on release.
        /// </remarks>
        [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Values
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: workspace: The workspace of the add-on release.
        /// </remarks>
        [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Workspace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAddonRelease`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAddonReleaseProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.RosAddonReleaseProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms2.IRosAddonReleaseProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: addonName: The name of the add-on.
            /// </remarks>
            [JsiiProperty(name: "addonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddonName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: addonVersion: The version of the add-on.
            /// </remarks>
            [JsiiProperty(name: "addonVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddonVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyId: The ID of the integration policy.
            /// </remarks>
            [JsiiProperty(name: "policyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: entityRules: Entity discovery rules model.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "entityRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms2.RosAddonRelease.EntityRulesProperty\"}]}}", isOptional: true)]
            public object? EntityRules
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: envType: The environment type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnvType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: lang: The language of the add-on.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lang
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: parentAddonReleaseId: The ID of the parent add-on release.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parentAddonReleaseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParentAddonReleaseId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: releaseName: The name of the add-on release.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "releaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReleaseName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: values: The values of the add-on release.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Values
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: workspace: The workspace of the add-on release.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Workspace
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
