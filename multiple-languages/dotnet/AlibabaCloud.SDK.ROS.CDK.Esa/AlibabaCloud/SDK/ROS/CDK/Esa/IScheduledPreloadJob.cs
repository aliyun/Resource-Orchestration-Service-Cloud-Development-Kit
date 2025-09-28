using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `ScheduledPreloadJob`.</summary>
    [JsiiInterface(nativeType: typeof(IScheduledPreloadJob), fullyQualifiedName: "@alicloud/ros-cdk-esa.IScheduledPreloadJob")]
    public interface IScheduledPreloadJob : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The time when the task was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Domains: The domain names to be prefetched.</summary>
        [JsiiProperty(name: "attrDomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomains
        {
            get;
        }

        /// <summary>Attribute ErrorInfo: The error message.</summary>
        [JsiiProperty(name: "attrErrorInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrErrorInfo
        {
            get;
        }

        /// <summary>Attribute FailedFileOss: OSS address of failed file.</summary>
        [JsiiProperty(name: "attrFailedFileOss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFailedFileOss
        {
            get;
        }

        /// <summary>Attribute FileId: The ID of the URL list file, which can be used during downloads.</summary>
        [JsiiProperty(name: "attrFileId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFileId
        {
            get;
        }

        /// <summary>Attribute InsertWay: The method to submit the URLs to be prefetched.</summary>
        [JsiiProperty(name: "attrInsertWay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInsertWay
        {
            get;
        }

        /// <summary>Attribute ScheduledPreloadJobId: The ID of the prefetch task.</summary>
        [JsiiProperty(name: "attrScheduledPreloadJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduledPreloadJobId
        {
            get;
        }

        /// <summary>Attribute ScheduledPreloadJobName: The task name.</summary>
        [JsiiProperty(name: "attrScheduledPreloadJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduledPreloadJobName
        {
            get;
        }

        /// <summary>Attribute SiteId: The site ID.</summary>
        [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteId
        {
            get;
        }

        /// <summary>Attribute TaskSubmitted: The number of submitted prefetch tasks.</summary>
        [JsiiProperty(name: "attrTaskSubmitted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskSubmitted
        {
            get;
        }

        /// <summary>Attribute TaskType: The task type.</summary>
        /// <remarks>
        /// Valid values: refresh and preload.
        /// </remarks>
        [JsiiProperty(name: "attrTaskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskType
        {
            get;
        }

        /// <summary>Attribute UrlCount: The total number of URLs.</summary>
        [JsiiProperty(name: "attrUrlCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUrlCount
        {
            get;
        }

        /// <summary>Attribute UrlSubmitted: The number of submitted URLs.</summary>
        [JsiiProperty(name: "attrUrlSubmitted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUrlSubmitted
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.ScheduledPreloadJobProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IScheduledPreloadJobProps Props
        {
            get;
        }

        /// <summary>Represents a `ScheduledPreloadJob`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScheduledPreloadJob), fullyQualifiedName: "@alicloud/ros-cdk-esa.IScheduledPreloadJob")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IScheduledPreloadJob
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The time when the task was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Domains: The domain names to be prefetched.</summary>
            [JsiiProperty(name: "attrDomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomains
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ErrorInfo: The error message.</summary>
            [JsiiProperty(name: "attrErrorInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrErrorInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FailedFileOss: OSS address of failed file.</summary>
            [JsiiProperty(name: "attrFailedFileOss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFailedFileOss
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FileId: The ID of the URL list file, which can be used during downloads.</summary>
            [JsiiProperty(name: "attrFileId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFileId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InsertWay: The method to submit the URLs to be prefetched.</summary>
            [JsiiProperty(name: "attrInsertWay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInsertWay
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScheduledPreloadJobId: The ID of the prefetch task.</summary>
            [JsiiProperty(name: "attrScheduledPreloadJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduledPreloadJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScheduledPreloadJobName: The task name.</summary>
            [JsiiProperty(name: "attrScheduledPreloadJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduledPreloadJobName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteId: The site ID.</summary>
            [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskSubmitted: The number of submitted prefetch tasks.</summary>
            [JsiiProperty(name: "attrTaskSubmitted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskSubmitted
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskType: The task type.</summary>
            /// <remarks>
            /// Valid values: refresh and preload.
            /// </remarks>
            [JsiiProperty(name: "attrTaskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UrlCount: The total number of URLs.</summary>
            [JsiiProperty(name: "attrUrlCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUrlCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UrlSubmitted: The number of submitted URLs.</summary>
            [JsiiProperty(name: "attrUrlSubmitted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUrlSubmitted
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.ScheduledPreloadJobProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IScheduledPreloadJobProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IScheduledPreloadJobProps>()!;
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
