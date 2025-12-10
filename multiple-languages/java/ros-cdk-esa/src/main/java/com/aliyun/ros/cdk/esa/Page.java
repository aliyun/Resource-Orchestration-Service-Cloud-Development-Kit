package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::Page</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.604Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.Page")
public class Page extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IPage {

    protected Page(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Page(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Page(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.PageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Page(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.PageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Content: The Base64-encoded content of the error page.
     * <p>
     * The content type is specified by the Content-Type field.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent() {
        return software.amazon.jsii.Kernel.get(this, "attrContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ContentType: The Content-Type field in the HTTP header.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrContentType() {
        return software.amazon.jsii.Kernel.get(this, "attrContentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the custom error page.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Kind: The type of the custom response page.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKind() {
        return software.amazon.jsii.Kernel.get(this, "attrKind", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PageId: The ID of the custom error page.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPageId() {
        return software.amazon.jsii.Kernel.get(this, "attrPageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PageName: The name of the custom response page.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPageName() {
        return software.amazon.jsii.Kernel.get(this, "attrPageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: The time when the custom error page was last modified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.PageProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.PageProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.Page}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.Page> {
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
        private final com.aliyun.ros.cdk.esa.PageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.PageProps.Builder();
        }

        /**
         * Property contentType: The Content-Type field in the HTTP header.
         * <p>
         * Valid values:
         * text/html
         * application/json
         * <p>
         * @return {@code this}
         * @param contentType Property contentType: The Content-Type field in the HTTP header. This parameter is required.
         */
        public Builder contentType(final java.lang.String contentType) {
            this.props.contentType(contentType);
            return this;
        }
        /**
         * Property contentType: The Content-Type field in the HTTP header.
         * <p>
         * Valid values:
         * text/html
         * application/json
         * <p>
         * @return {@code this}
         * @param contentType Property contentType: The Content-Type field in the HTTP header. This parameter is required.
         */
        public Builder contentType(final com.aliyun.ros.cdk.core.IResolvable contentType) {
            this.props.contentType(contentType);
            return this;
        }

        /**
         * Property pageName: The name of the custom response page.
         * <p>
         * @return {@code this}
         * @param pageName Property pageName: The name of the custom response page. This parameter is required.
         */
        public Builder pageName(final java.lang.String pageName) {
            this.props.pageName(pageName);
            return this;
        }
        /**
         * Property pageName: The name of the custom response page.
         * <p>
         * @return {@code this}
         * @param pageName Property pageName: The name of the custom response page. This parameter is required.
         */
        public Builder pageName(final com.aliyun.ros.cdk.core.IResolvable pageName) {
            this.props.pageName(pageName);
            return this;
        }

        /**
         * Property content: The Base64-encoded page content.
         * <p>
         * Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
         * <p>
         * @return {@code this}
         * @param content Property content: The Base64-encoded page content. This parameter is required.
         */
        public Builder content(final java.lang.String content) {
            this.props.content(content);
            return this;
        }
        /**
         * Property content: The Base64-encoded page content.
         * <p>
         * Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
         * <p>
         * @return {@code this}
         * @param content Property content: The Base64-encoded page content. This parameter is required.
         */
        public Builder content(final com.aliyun.ros.cdk.core.IResolvable content) {
            this.props.content(content);
            return this;
        }

        /**
         * Property description: The description of the page.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the page. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the page.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the page. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.Page}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.Page build() {
            return new com.aliyun.ros.cdk.esa.Page(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
