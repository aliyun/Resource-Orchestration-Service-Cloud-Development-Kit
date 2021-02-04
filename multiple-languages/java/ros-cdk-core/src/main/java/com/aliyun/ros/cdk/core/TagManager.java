package com.aliyun.ros.cdk.core;

/**
 * TagManager facilitates a common implementation of tagging for Constructs.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.040Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.TagManager")
public class TagManager extends software.amazon.jsii.JsiiObject {

    protected TagManager(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TagManager(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public TagManager(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagType tagType, final @org.jetbrains.annotations.NotNull java.lang.String resourceTypeName, final @org.jetbrains.annotations.Nullable java.lang.Object tagStructure, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.TagManagerOptions options) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(tagType, "tagType is required"), java.util.Objects.requireNonNull(resourceTypeName, "resourceTypeName is required"), tagStructure, options });
    }

    public TagManager(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagType tagType, final @org.jetbrains.annotations.NotNull java.lang.String resourceTypeName, final @org.jetbrains.annotations.Nullable java.lang.Object tagStructure) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(tagType, "tagType is required"), java.util.Objects.requireNonNull(resourceTypeName, "resourceTypeName is required"), tagStructure });
    }

    public TagManager(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagType tagType, final @org.jetbrains.annotations.NotNull java.lang.String resourceTypeName) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(tagType, "tagType is required"), java.util.Objects.requireNonNull(resourceTypeName, "resourceTypeName is required") });
    }

    /**
     * Check whether the given construct is Taggable.
     * <p>
     * @param construct This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isTaggable(final @org.jetbrains.annotations.NotNull java.lang.Object construct) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.TagManager.class, "isTaggable", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { construct });
    }

    /**
     * Determine if the aspect applies here  Looks at the include and exclude resourceTypeName arrays to determine if the aspect applies here.
     * <p>
     * @param include
     * @param exclude
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean applyTagAspectHere(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> include, final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> exclude) {
        return software.amazon.jsii.Kernel.call(this, "applyTagAspectHere", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { include, exclude });
    }

    /**
     * Determine if the aspect applies here  Looks at the include and exclude resourceTypeName arrays to determine if the aspect applies here.
     * <p>
     * @param include
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean applyTagAspectHere(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> include) {
        return software.amazon.jsii.Kernel.call(this, "applyTagAspectHere", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { include });
    }

    /**
     * Determine if the aspect applies here  Looks at the include and exclude resourceTypeName arrays to determine if the aspect applies here.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean applyTagAspectHere() {
        return software.amazon.jsii.Kernel.call(this, "applyTagAspectHere", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * Returns true if there are any tags defined.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean hasTags() {
        return software.amazon.jsii.Kernel.call(this, "hasTags", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * Removes the specified tag from the array if it exists.
     * <p>
     * @param key The tag to remove. This parameter is required.
     * @param priority The priority of the remove operation. This parameter is required.
     */
    public void removeTag(final @org.jetbrains.annotations.NotNull java.lang.String key, final @org.jetbrains.annotations.NotNull java.lang.Number priority) {
        software.amazon.jsii.Kernel.call(this, "removeTag", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(key, "key is required"), java.util.Objects.requireNonNull(priority, "priority is required") });
    }

    /**
     * Renders tags into the proper format based on TagType.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object renderTags() {
        return software.amazon.jsii.Kernel.call(this, "renderTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Adds the specified tag to the array of tags.
     * <p>
     * @param key This parameter is required.
     * @param value This parameter is required.
     * @param priority
     * @param applyToLaunchedInstances
     */
    public void setTag(final @org.jetbrains.annotations.NotNull java.lang.String key, final @org.jetbrains.annotations.NotNull java.lang.String value, final @org.jetbrains.annotations.Nullable java.lang.Number priority, final @org.jetbrains.annotations.Nullable java.lang.Boolean applyToLaunchedInstances) {
        software.amazon.jsii.Kernel.call(this, "setTag", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(key, "key is required"), java.util.Objects.requireNonNull(value, "value is required"), priority, applyToLaunchedInstances });
    }

    /**
     * Adds the specified tag to the array of tags.
     * <p>
     * @param key This parameter is required.
     * @param value This parameter is required.
     * @param priority
     */
    public void setTag(final @org.jetbrains.annotations.NotNull java.lang.String key, final @org.jetbrains.annotations.NotNull java.lang.String value, final @org.jetbrains.annotations.Nullable java.lang.Number priority) {
        software.amazon.jsii.Kernel.call(this, "setTag", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(key, "key is required"), java.util.Objects.requireNonNull(value, "value is required"), priority });
    }

    /**
     * Adds the specified tag to the array of tags.
     * <p>
     * @param key This parameter is required.
     * @param value This parameter is required.
     */
    public void setTag(final @org.jetbrains.annotations.NotNull java.lang.String key, final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.call(this, "setTag", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(key, "key is required"), java.util.Objects.requireNonNull(value, "value is required") });
    }

    /**
     * The property name for tag values  Normally this is `tags` but some resources choose a different name.
     * <p>
     * Cognito
     * UserPool uses UserPoolTags
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getTagPropertyName() {
        return software.amazon.jsii.Kernel.get(this, "tagPropertyName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.TagManager}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.TagManager> {
        /**
         * @return a new instance of {@link Builder}.
         * @param tagType This parameter is required.
         * @param resourceTypeName This parameter is required.
         * @param tagStructure
         */
        public static Builder create(final com.aliyun.ros.cdk.core.TagType tagType, final java.lang.String resourceTypeName, final java.lang.Object tagStructure) {
            return new Builder(tagType, resourceTypeName, tagStructure);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param tagType This parameter is required.
         * @param resourceTypeName This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.TagType tagType, final java.lang.String resourceTypeName) {
            return new Builder(tagType, resourceTypeName, null);
        }

        private final com.aliyun.ros.cdk.core.TagType tagType;
        private final java.lang.String resourceTypeName;
        private final java.lang.Object tagStructure;
        private com.aliyun.ros.cdk.core.TagManagerOptions.Builder options;

        private Builder(final com.aliyun.ros.cdk.core.TagType tagType, final java.lang.String resourceTypeName, final java.lang.Object tagStructure) {
            this.tagType = tagType;
            this.resourceTypeName = resourceTypeName;
            this.tagStructure = tagStructure;
        }

        /**
         * The name of the property in ROS for these tags  Normally this is `tags`, but Cognito UserPool uses UserPoolTags.
         * <p>
         * Default: "tags"
         * <p>
         * @return {@code this}
         * @param tagPropertyName The name of the property in ROS for these tags  Normally this is `tags`, but Cognito UserPool uses UserPoolTags. This parameter is required.
         */
        public Builder tagPropertyName(final java.lang.String tagPropertyName) {
            this.options().tagPropertyName(tagPropertyName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.core.TagManager}.
         */
        @Override
        public com.aliyun.ros.cdk.core.TagManager build() {
            return new com.aliyun.ros.cdk.core.TagManager(
                this.tagType,
                this.resourceTypeName,
                this.tagStructure,
                this.options != null ? this.options.build() : null
            );
        }

        private com.aliyun.ros.cdk.core.TagManagerOptions.Builder options() {
            if (this.options == null) {
                this.options = new com.aliyun.ros.cdk.core.TagManagerOptions.Builder();
            }
            return this.options;
        }
    }
}
