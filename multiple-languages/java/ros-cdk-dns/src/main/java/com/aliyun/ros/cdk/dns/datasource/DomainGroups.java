package com.aliyun.ros.cdk.dns.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::DNS::DomainGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:36.507Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.datasource.DomainGroups")
public class DomainGroups extends com.aliyun.ros.cdk.core.Resource {

    protected DomainGroups(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DomainGroups(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::DNS::DomainGroups</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public DomainGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dns.datasource.DomainGroupsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::DNS::DomainGroups</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public DomainGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dns.datasource.DomainGroupsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::DNS::DomainGroups</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public DomainGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute DomainGroupIds: The list of The DNS domain group ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainGroupIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DomainGroups: The information about DNS domain groups.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainGroups() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainGroups", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.datasource.DomainGroups}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.datasource.DomainGroups> {
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
        private com.aliyun.ros.cdk.dns.datasource.DomainGroupsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property keyWord: The keyword for searches in "%KeyWord%" mode.
         * <p>
         * The value is not case-sensitive.
         * <p>
         * @return {@code this}
         * @param keyWord Property keyWord: The keyword for searches in "%KeyWord%" mode. This parameter is required.
         */
        public Builder keyWord(final java.lang.String keyWord) {
            this.props().keyWord(keyWord);
            return this;
        }
        /**
         * Property keyWord: The keyword for searches in "%KeyWord%" mode.
         * <p>
         * The value is not case-sensitive.
         * <p>
         * @return {@code this}
         * @param keyWord Property keyWord: The keyword for searches in "%KeyWord%" mode. This parameter is required.
         */
        public Builder keyWord(final com.aliyun.ros.cdk.core.IResolvable keyWord) {
            this.props().keyWord(keyWord);
            return this;
        }

        /**
         * Property lang: The language type.
         * <p>
         * @return {@code this}
         * @param lang Property lang: The language type. This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props().lang(lang);
            return this;
        }
        /**
         * Property lang: The language type.
         * <p>
         * @return {@code this}
         * @param lang Property lang: The language type. This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props().lang(lang);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.datasource.DomainGroups}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.datasource.DomainGroups build() {
            return new com.aliyun.ros.cdk.dns.datasource.DomainGroups(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.dns.datasource.DomainGroupsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.dns.datasource.DomainGroupsProps.Builder();
            }
            return this.props;
        }
    }
}
