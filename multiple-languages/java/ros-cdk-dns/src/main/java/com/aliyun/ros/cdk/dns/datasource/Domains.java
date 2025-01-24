package com.aliyun.ros.cdk.dns.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::DNS::Domains</code>, which is used to query domain names.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:37.127Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.datasource.Domains")
public class Domains extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dns.datasource.IDomains {

    protected Domains(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Domains(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Domains(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dns.datasource.DomainsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Domains(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dns.datasource.DomainsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Domains(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute DomainIds: The list of The DNS domain ids.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Domains: The information about DNS domains.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomains() {
        return software.amazon.jsii.Kernel.get(this, "attrDomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.datasource.DomainsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dns.datasource.DomainsProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.datasource.Domains}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.datasource.Domains> {
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
        private com.aliyun.ros.cdk.dns.datasource.DomainsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property groupId: The ID of the domain name group.
         * <p>
         * If you do not specify this parameter, all domain names are queried by default.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The ID of the domain name group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props().groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The ID of the domain name group.
         * <p>
         * If you do not specify this parameter, all domain names are queried by default.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The ID of the domain name group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props().groupId(groupId);
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
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property searchMode: The search mode.
         * <p>
         * @return {@code this}
         * @param searchMode Property searchMode: The search mode. This parameter is required.
         */
        public Builder searchMode(final java.lang.String searchMode) {
            this.props().searchMode(searchMode);
            return this;
        }
        /**
         * Property searchMode: The search mode.
         * <p>
         * @return {@code this}
         * @param searchMode Property searchMode: The search mode. This parameter is required.
         */
        public Builder searchMode(final com.aliyun.ros.cdk.core.IResolvable searchMode) {
            this.props().searchMode(searchMode);
            return this;
        }

        /**
         * Property starmark: Specifies whether to query the starmark of the domain name.
         * <p>
         * @return {@code this}
         * @param starmark Property starmark: Specifies whether to query the starmark of the domain name. This parameter is required.
         */
        public Builder starmark(final java.lang.Boolean starmark) {
            this.props().starmark(starmark);
            return this;
        }
        /**
         * Property starmark: Specifies whether to query the starmark of the domain name.
         * <p>
         * @return {@code this}
         * @param starmark Property starmark: Specifies whether to query the starmark of the domain name. This parameter is required.
         */
        public Builder starmark(final com.aliyun.ros.cdk.core.IResolvable starmark) {
            this.props().starmark(starmark);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.datasource.Domains}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.datasource.Domains build() {
            return new com.aliyun.ros.cdk.dns.datasource.Domains(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.dns.datasource.DomainsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.dns.datasource.DomainsProps.Builder();
            }
            return this.props;
        }
    }
}
