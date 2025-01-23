using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms.Datasource
{
    /// <summary>Represents a `XTraceApps`.</summary>
    [JsiiInterface(nativeType: typeof(IXTraceApps), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.IXTraceApps")]
    public interface IXTraceApps : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Pids: The list of Pids.</summary>
        [JsiiProperty(name: "attrPids", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPids
        {
            get;
        }

        /// <summary>Attribute XTraceApps: The list of Application Monitoring tasks.</summary>
        [JsiiProperty(name: "attrXTraceApps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrXTraceApps
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.XTraceAppsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IXTraceAppsProps Props
        {
            get;
        }

        /// <summary>Represents a `XTraceApps`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IXTraceApps), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.IXTraceApps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IXTraceApps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Pids: The list of Pids.</summary>
            [JsiiProperty(name: "attrPids", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPids
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute XTraceApps: The list of Application Monitoring tasks.</summary>
            [JsiiProperty(name: "attrXTraceApps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrXTraceApps
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.XTraceAppsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IXTraceAppsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IXTraceAppsProps>()!;
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
