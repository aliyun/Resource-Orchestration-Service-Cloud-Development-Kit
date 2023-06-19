using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlpautoml
{
    /// <summary>Properties for defining a `ALIYUN::NLPAUTOML::Project`.</summary>
    [JsiiInterface(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-nlpautoml.ProjectProps")]
    public interface IProjectProps
    {
        /// <summary>Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.</summary>
        [JsiiProperty(name: "projectDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectDescription
        {
            get;
        }

        /// <summary>Property projectName: The name of project.</summary>
        /// <remarks>
        /// Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Property projectType: The type of nlp project.</summary>
        /// <remarks>
        /// The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
        /// </remarks>
        [JsiiProperty(name: "projectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectType
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::NLPAUTOML::Project`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-nlpautoml.ProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlpautoml.IProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.</summary>
            [JsiiProperty(name: "projectDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectName: The name of project.</summary>
            /// <remarks>
            /// Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectType: The type of nlp project.</summary>
            /// <remarks>
            /// The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
            /// </remarks>
            [JsiiProperty(name: "projectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
