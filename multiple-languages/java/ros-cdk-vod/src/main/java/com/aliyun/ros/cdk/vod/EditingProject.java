package com.aliyun.ros.cdk.vod;

/**
 * A ROS resource type:  <code>ALIYUN::VOD::EditingProject</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:02.612Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.EditingProject")
public class EditingProject extends com.aliyun.ros.cdk.core.Resource {

    protected EditingProject(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EditingProject(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::VOD::EditingProject</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public EditingProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.EditingProjectProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::VOD::EditingProject</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public EditingProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.EditingProjectProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The time when the online editing project was created.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EditingProjectId: The ID of the online editing project.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEditingProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrEditingProjectId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EditingProjectName: The name of the online editing project.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEditingProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrEditingProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ModifiedTime: The last time when the online editing project was modified.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Timeline: The timeline of the online editing project.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTimeline() {
        return software.amazon.jsii.Kernel.get(this, "attrTimeline", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Title: The title of the online editing project.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTitle() {
        return software.amazon.jsii.Kernel.get(this, "attrTitle", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vod.EditingProject}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vod.EditingProject> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vod.EditingProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vod.EditingProjectProps.Builder();
        }

        /**
         * Property title: The title of the online editing project.
         * <p>
         * @return {@code this}
         * @param title Property title: The title of the online editing project. This parameter is required.
         */
        public Builder title(final java.lang.String title) {
            this.props.title(title);
            return this;
        }
        /**
         * Property title: The title of the online editing project.
         * <p>
         * @return {@code this}
         * @param title Property title: The title of the online editing project. This parameter is required.
         */
        public Builder title(final com.aliyun.ros.cdk.core.IResolvable title) {
            this.props.title(title);
            return this;
        }

        /**
         * Property editingProjectName: The name of the online editing project.
         * <p>
         * @return {@code this}
         * @param editingProjectName Property editingProjectName: The name of the online editing project. This parameter is required.
         */
        public Builder editingProjectName(final java.lang.String editingProjectName) {
            this.props.editingProjectName(editingProjectName);
            return this;
        }
        /**
         * Property editingProjectName: The name of the online editing project.
         * <p>
         * @return {@code this}
         * @param editingProjectName Property editingProjectName: The name of the online editing project. This parameter is required.
         */
        public Builder editingProjectName(final com.aliyun.ros.cdk.core.IResolvable editingProjectName) {
            this.props.editingProjectName(editingProjectName);
            return this;
        }

        /**
         * Property timeline: The timeline of the online editing project, in JSON format.
         * <p>
         * If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
         * <p>
         * @return {@code this}
         * @param timeline Property timeline: The timeline of the online editing project, in JSON format. This parameter is required.
         */
        public Builder timeline(final java.lang.String timeline) {
            this.props.timeline(timeline);
            return this;
        }
        /**
         * Property timeline: The timeline of the online editing project, in JSON format.
         * <p>
         * If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
         * <p>
         * @return {@code this}
         * @param timeline Property timeline: The timeline of the online editing project, in JSON format. This parameter is required.
         */
        public Builder timeline(final com.aliyun.ros.cdk.core.IResolvable timeline) {
            this.props.timeline(timeline);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vod.EditingProject}.
         */
        @Override
        public com.aliyun.ros.cdk.vod.EditingProject build() {
            return new com.aliyun.ros.cdk.vod.EditingProject(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
