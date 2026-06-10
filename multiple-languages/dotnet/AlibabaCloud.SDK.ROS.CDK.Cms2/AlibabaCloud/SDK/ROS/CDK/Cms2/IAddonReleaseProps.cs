using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2
{
    /// <summary>Properties for defining a `AddonRelease`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAddonReleaseProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.AddonReleaseProps")]
    public interface IAddonReleaseProps
    {
        /// <summary>Property addonName: The name of the add-on.</summary>
        [JsiiProperty(name: "addonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddonName
        {
            get;
        }

        /// <summary>Property addonVersion: The version of the add-on.</summary>
        [JsiiProperty(name: "addonVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddonVersion
        {
            get;
        }

        /// <summary>Property policyId: The ID of the integration policy.</summary>
        [JsiiProperty(name: "policyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyId
        {
            get;
        }

        /// <summary>Property entityRules: Entity discovery rules model.</summary>
        [JsiiProperty(name: "entityRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms2.RosAddonRelease.EntityRulesProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EntityRules
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property envType: The environment type.</summary>
        [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lang: The language of the add-on.</summary>
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lang
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parentAddonReleaseId: The ID of the parent add-on release.</summary>
        [JsiiProperty(name: "parentAddonReleaseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParentAddonReleaseId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property releaseName: The name of the add-on release.</summary>
        [JsiiProperty(name: "releaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReleaseName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property values: The values of the add-on release.</summary>
        [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Values
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workspace: The workspace of the add-on release.</summary>
        [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Workspace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AddonRelease`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAddonReleaseProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.AddonReleaseProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms2.IAddonReleaseProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addonName: The name of the add-on.</summary>
            [JsiiProperty(name: "addonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddonName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property addonVersion: The version of the add-on.</summary>
            [JsiiProperty(name: "addonVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddonVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyId: The ID of the integration policy.</summary>
            [JsiiProperty(name: "policyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property entityRules: Entity discovery rules model.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "entityRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms2.RosAddonRelease.EntityRulesProperty\"}]}}", isOptional: true)]
            public object? EntityRules
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property envType: The environment type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnvType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lang: The language of the add-on.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lang
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parentAddonReleaseId: The ID of the parent add-on release.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parentAddonReleaseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParentAddonReleaseId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property releaseName: The name of the add-on release.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "releaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReleaseName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property values: The values of the add-on release.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Values
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workspace: The workspace of the add-on release.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Workspace
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
