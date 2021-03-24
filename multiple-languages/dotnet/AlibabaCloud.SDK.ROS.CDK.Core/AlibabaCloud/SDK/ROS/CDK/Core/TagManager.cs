using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>TagManager facilitates a common implementation of tagging for Constructs.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.TagManager), fullyQualifiedName: "@alicloud/ros-cdk-core.TagManager", parametersJson: "[{\"name\":\"tagType\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.TagType\"}},{\"name\":\"resourceTypeName\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"tagStructure\",\"optional\":true,\"type\":{\"primitive\":\"any\"}},{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.TagManagerOptions\"}}]")]
    public class TagManager : DeputyBase
    {
        public TagManager(AlibabaCloud.SDK.ROS.CDK.Core.TagType tagType, string resourceTypeName, object? tagStructure = null, AlibabaCloud.SDK.ROS.CDK.Core.ITagManagerOptions? options = null): base(new DeputyProps(new object?[]{tagType, resourceTypeName, tagStructure, options}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TagManager(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TagManager(DeputyProps props): base(props)
        {
        }

        /// <summary>Check whether the given construct is Taggable.</summary>
        [JsiiMethod(name: "isTaggable", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"construct\",\"type\":{\"primitive\":\"any\"}}]")]
        public static bool IsTaggable(object construct)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.TagManager), new System.Type[]{typeof(object)}, new object[]{construct})!;
        }

        /// <summary>Determine if the aspect applies here&#xD; &#xD; Looks at the include and exclude resourceTypeName arrays to determine if&#xD; the aspect applies here.</summary>
        [JsiiMethod(name: "applyTagAspectHere", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"include\",\"optional\":true,\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}},{\"name\":\"exclude\",\"optional\":true,\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}]")]
        public virtual bool ApplyTagAspectHere(string[]? include = null, string[]? exclude = null)
        {
            return InvokeInstanceMethod<bool>(new System.Type[]{typeof(string[]), typeof(string[])}, new object?[]{include, exclude})!;
        }

        /// <summary>Returns true if there are any tags defined.</summary>
        [JsiiMethod(name: "hasTags", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}")]
        public virtual bool HasTags()
        {
            return InvokeInstanceMethod<bool>(new System.Type[]{}, new object[]{})!;
        }

        /// <summary>Removes the specified tag from the array if it exists.</summary>
        /// <param name="key">The tag to remove.</param>
        /// <param name="priority">The priority of the remove operation.</param>
        [JsiiMethod(name: "removeTag", parametersJson: "[{\"docs\":{\"summary\":\"The tag to remove.\"},\"name\":\"key\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The priority of the remove operation.\"},\"name\":\"priority\",\"type\":{\"primitive\":\"number\"}}]")]
        public virtual void RemoveTag(string key, double priority)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(double)}, new object[]{key, priority});
        }

        /// <summary>Renders tags into the proper format based on TagType.</summary>
        [JsiiMethod(name: "renderTags", returnsJson: "{\"type\":{\"primitive\":\"any\"}}")]
        public virtual object RenderTags()
        {
            return InvokeInstanceMethod<object>(new System.Type[]{}, new object[]{})!;
        }

        /// <summary>Adds the specified tag to the array of tags.</summary>
        [JsiiMethod(name: "setTag", parametersJson: "[{\"name\":\"key\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"value\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"priority\",\"optional\":true,\"type\":{\"primitive\":\"number\"}},{\"name\":\"applyToLaunchedInstances\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
        public virtual void SetTag(string key, string @value, double? priority = null, bool? applyToLaunchedInstances = null)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(string), typeof(double), typeof(bool)}, new object?[]{key, @value, priority, applyToLaunchedInstances});
        }

        /// <summary>The property name for tag values&#xD; &#xD; Normally this is `tags` but some resources choose a different name.</summary>
        /// <remarks>
        /// Cognito
        /// UserPool uses UserPoolTags
        /// </remarks>
        [JsiiProperty(name: "tagPropertyName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string TagPropertyName
        {
            get => GetInstanceProperty<string>()!;
        }
    }
}
