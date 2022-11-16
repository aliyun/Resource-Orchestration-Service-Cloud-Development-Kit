package com.aliyun.ros.cdk.core;

/**
 * A root construct which represents a single ROS stack.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:08.142Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Stack")
public class Stack extends com.aliyun.ros.cdk.core.Construct implements com.aliyun.ros.cdk.core.ITaggable {

    protected Stack(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Stack(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates a new stack.
     * <p>
     * @param scope Parent of this stack, usually a Program instance.
     * @param id The construct ID of this stack.
     * @param props Stack properties.
     */
    public Stack(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.Nullable java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.StackProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { scope, id, props });
    }

    /**
     * Creates a new stack.
     * <p>
     * @param scope Parent of this stack, usually a Program instance.
     * @param id The construct ID of this stack.
     */
    public Stack(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.Nullable java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { scope, id });
    }

    /**
     * Creates a new stack.
     * <p>
     * @param scope Parent of this stack, usually a Program instance.
     */
    public Stack(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Construct scope) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { scope });
    }

    /**
     * Creates a new stack.
     */
    public Stack() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Return whether the given object is a Stack.
     * <p>
     * We do attribute detection since we can't reliably use 'instanceof'.
     * <p>
     * @param x This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isStack(final @org.jetbrains.annotations.NotNull java.lang.Object x) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Stack.class, "isStack", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { x });
    }

    /**
     * Looks up the first stack scope in which `construct` is defined.
     * <p>
     * Fails if there is no stack up the tree.
     * <p>
     * @param construct The construct to start the search from. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack of(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct construct) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Stack.class, "of", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class), new Object[] { java.util.Objects.requireNonNull(construct, "construct is required") });
    }

    /**
     * Add a dependency between this stack and another stack.
     * <p>
     * This can be used to define dependencies between any two stacks within an
     * app, and also supports nested stacks.
     * <p>
     * @param target This parameter is required.
     * @param reason
     */
    public void addDependency(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack target, final @org.jetbrains.annotations.Nullable java.lang.String reason) {
        software.amazon.jsii.Kernel.call(this, "addDependency", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(target, "target is required"), reason });
    }

    /**
     * Add a dependency between this stack and another stack.
     * <p>
     * This can be used to define dependencies between any two stacks within an
     * app, and also supports nested stacks.
     * <p>
     * @param target This parameter is required.
     */
    public void addDependency(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack target) {
        software.amazon.jsii.Kernel.call(this, "addDependency", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(target, "target is required") });
    }

    /**
     * Returns the naming scheme used to allocate logical IDs.
     * <p>
     * By default, uses
     * the <code>HashedAddressingScheme</code> but this method can be overridden to customize
     * this behavior.
     * <p>
     * In order to make sure logical IDs are unique and stable, we hash the resource
     * construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
     * a suffix to the path components joined without a separator (ROS
     * IDs only allow alphanumeric characters).
     * <p>
     * The result will be:
     * <p>
     * &lt;path.join('')&gt;&lt;md5(path.join('/')&gt;
     * "human"      "hash"
     * <p>
     * If the "human" part of the ID exceeds 240 characters, we simply trim it so
     * the total ID doesn't exceed 255 character limit.
     * <p>
     * We only take 8 characters from the md5 hash (0.000005 chance of collision).
     * <p>
     * Special cases:
     * <p>
     * <ul>
     * <li>If the path only contains a single component (i.e. it's a top-level
     * resource), we won't add the hash to it. The hash is not needed for
     * disamiguation and also, it allows for a more straightforward migration an
     * existing ROS template to a CDK stack without logical ID changes
     * (or renames).</li>
     * <li>For aesthetic reasons, if the last components of the path are the same
     * (i.e. <code>L1/L2/Pipeline/Pipeline</code>), they will be de-duplicated to make the
     * resulting human portion of the ID more pleasing: <code>L1L2Pipeline&lt;HASH&gt;</code>
     * instead of <code>L1L2PipelinePipeline&lt;HASH&gt;</code></li>
     * <li>If a component is named "Default" it will be omitted from the path. This
     * allows refactoring higher level abstractions around constructs without affecting
     * the IDs of already deployed resources.</li>
     * <li>If a component is named "Resource" it will be omitted from the user-visible
     * path, but included in the hash. This reduces visual noise in the human readable
     * part of the identifier.</li>
     * </ul>
     * <p>
     * @param rosElement The element for which the logical ID is allocated. This parameter is required.
     */
    protected @org.jetbrains.annotations.NotNull java.lang.String allocateLogicalId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosElement rosElement) {
        return software.amazon.jsii.Kernel.call(this, "allocateLogicalId", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(rosElement, "rosElement is required") });
    }

    /**
     * Allocates a stack-unique logical identity for a specific resource.
     * <p>
     * This method is called when a <code>RosElement</code> is created and used to render the
     * initial logical identity of resources. Logical ID renames are applied at
     * this stage.
     * <p>
     * This method uses the protected method <code>allocateLogicalId</code> to render the
     * logical ID for an element. To modify the naming scheme, extend the <code>Stack</code>
     * class and override this method.
     * <p>
     * @param element The ROS element for which a logical identity is needed. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getLogicalId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosElement element) {
        return software.amazon.jsii.Kernel.call(this, "getLogicalId", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(element, "element is required") });
    }

    /**
     * (deprecated) Deprecated.
     * <p>
     * @return reference itself without any change
     * @deprecated cross reference handling has been moved to `App.prepare()`.
     * @param _sourceStack This parameter is required.
     * @param reference This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable prepareCrossReference(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack _sourceStack, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Reference reference) {
        return software.amazon.jsii.Kernel.call(this, "prepareCrossReference", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(_sourceStack, "_sourceStack is required"), java.util.Objects.requireNonNull(reference, "reference is required") });
    }

    /**
     * Rename a generated logical identities.
     * <p>
     * To modify the naming scheme strategy, extend the <code>Stack</code> class and
     * override the <code>allocateLogicalId</code> method.
     * <p>
     * @param oldId This parameter is required.
     * @param newId This parameter is required.
     */
    public void renameLogicalId(final @org.jetbrains.annotations.NotNull java.lang.String oldId, final @org.jetbrains.annotations.NotNull java.lang.String newId) {
        software.amazon.jsii.Kernel.call(this, "renameLogicalId", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(oldId, "oldId is required"), java.util.Objects.requireNonNull(newId, "newId is required") });
    }

    /**
     * Resolve a tokenized value in the context of the current stack.
     * <p>
     * @param obj This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull java.lang.Object obj) {
        return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { obj });
    }

    /**
     * Allows this construct to emit artifacts into the cloud assembly during synthesis.
     * <p>
     * This method is usually implemented by framework-level constructs such as <code>Stack</code> and <code>Asset</code>
     * as they participate in synthesizing the cloud assembly.
     * <p>
     * @param session This parameter is required.
     */
    @Override
    protected void synthesize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
        software.amazon.jsii.Kernel.call(this, "synthesize", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
    }

    /**
     * Convert an object, potentially containing tokens, to a JSON string.
     * <p>
     * @param obj This parameter is required.
     * @param space
     */
    public @org.jetbrains.annotations.NotNull java.lang.String toJsonString(final @org.jetbrains.annotations.NotNull java.lang.Object obj, final @org.jetbrains.annotations.Nullable java.lang.Number space) {
        return software.amazon.jsii.Kernel.call(this, "toJsonString", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { obj, space });
    }

    /**
     * Convert an object, potentially containing tokens, to a JSON string.
     * <p>
     * @param obj This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String toJsonString(final @org.jetbrains.annotations.NotNull java.lang.Object obj) {
        return software.amazon.jsii.Kernel.call(this, "toJsonString", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { obj });
    }

    /**
     * The ID of the cloud assembly artifact for this stack.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getArtifactId() {
        return software.amazon.jsii.Kernel.get(this, "artifactId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Return the stacks this stack depends on.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.Stack> getDependencies() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "dependencies", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getNested() {
        return software.amazon.jsii.Kernel.get(this, "nested", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * The ID of the stack.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getStackId() {
        return software.amazon.jsii.Kernel.get(this, "stackId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * The concrete ROS physical stack name.
     * <p>
     * This is either the name defined explicitly in the <code>stackName</code> prop or
     * allocated based on the stack's location in the construct tree. Stacks that
     * are directly defined under the app use their construct <code>id</code> as their stack
     * name. Stacks that are defined deeper within the tree will use a hashed naming
     * scheme based on the construct path to ensure uniqueness.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getStackName() {
        return software.amazon.jsii.Kernel.get(this, "stackName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * (experimental) Synthesis method for this stack.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IStackSynthesizer getSynthesizer() {
        return software.amazon.jsii.Kernel.get(this, "synthesizer", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IStackSynthesizer.class));
    }

    /**
     * Tags to be applied to the stack.
     */
    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagManager getTags() {
        return software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TagManager.class));
    }

    /**
     * The name of the ROS template file emitted to the output directory during synthesis.
     * <p>
     * Example:
     * <p>
     * <blockquote><pre>
     * MyStack.template.json
     * </pre></blockquote>
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getTemplateFile() {
        return software.amazon.jsii.Kernel.get(this, "templateFile", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Options for ROS template (like version, description).
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ITemplateOptions getTemplateOptions() {
        return software.amazon.jsii.Kernel.get(this, "templateOptions", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ITemplateOptions.class));
    }

    /**
     * If this is a nested stack, returns it's parent stack.
     */
    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Stack getNestedStackParent() {
        return software.amazon.jsii.Kernel.get(this, "nestedStackParent", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
    }

    /**
     * (experimental) If this is a nested stack, this represents its `ALIYUN::ROS::Stack` resource.
     * <p>
     * <code>undefined</code> for top-level (non-nested) stacks.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosResource getNestedStackResource() {
        return software.amazon.jsii.Kernel.get(this, "nestedStackResource", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosResource.class));
    }

    /**
     * (deprecated) Returns the parent of a nested stack.
     * <p>
     * @deprecated use `nestedStackParent`
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Stack getParentStack() {
        return software.amazon.jsii.Kernel.get(this, "parentStack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.Stack}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.Stack> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope Parent of this stack, usually a Program instance.
         * @param id The construct ID of this stack.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope Parent of this stack, usually a Program instance.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope) {
            return new Builder(scope, null);
        }
        /**
         * @return a new instance of {@link Builder}.
         */
        public static Builder create() {
            return new Builder(null, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private com.aliyun.ros.cdk.core.StackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
        }

        /**
         * A description of the stack.
         * <p>
         * Default: - No description.
         * <p>
         * @return {@code this}
         * @param description A description of the stack. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public Builder enableResourcePropertyConstraint(final java.lang.Boolean enableResourcePropertyConstraint) {
            this.props().enableResourcePropertyConstraint(enableResourcePropertyConstraint);
            return this;
        }

        /**
         * @return {@code this}
         * @param metadata This parameter is required.
         */
        public Builder metadata(final java.util.Map<java.lang.String, ? extends java.lang.Object> metadata) {
            this.props().metadata(metadata);
            return this;
        }

        /**
         * Name to deploy the stack with.
         * <p>
         * Default: - Derived from construct path.
         * <p>
         * @return {@code this}
         * @param stackName Name to deploy the stack with. This parameter is required.
         */
        public Builder stackName(final java.lang.String stackName) {
            this.props().stackName(stackName);
            return this;
        }

        /**
         * Synthesis method to use while deploying this stack.
         * <p>
         * Default: - `DefaultStackSynthesizer`
         * <p>
         * @return {@code this}
         * @param synthesizer Synthesis method to use while deploying this stack. This parameter is required.
         */
        public Builder synthesizer(final com.aliyun.ros.cdk.core.IStackSynthesizer synthesizer) {
            this.props().synthesizer(synthesizer);
            return this;
        }

        /**
         * Stack tags that will be applied to all the taggable resources and the stack itself.
         * <p>
         * Default: {}
         * <p>
         * @return {@code this}
         * @param tags Stack tags that will be applied to all the taggable resources and the stack itself. This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, java.lang.String> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param version This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props().version(version);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.core.Stack}.
         */
        @Override
        public com.aliyun.ros.cdk.core.Stack build() {
            return new com.aliyun.ros.cdk.core.Stack(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null
            );
        }

        private com.aliyun.ros.cdk.core.StackProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.core.StackProps.Builder();
            }
            return this.props;
        }
    }
}
