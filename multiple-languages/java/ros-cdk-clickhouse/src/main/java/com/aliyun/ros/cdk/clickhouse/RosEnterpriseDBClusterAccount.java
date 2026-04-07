package com.aliyun.ros.cdk.clickhouse;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ClickHouse::EnterpriseDBClusterAccount</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.629Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccount")
public class RosEnterpriseDBClusterAccount extends com.aliyun.ros.cdk.core.RosResource {

    protected RosEnterpriseDBClusterAccount(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosEnterpriseDBClusterAccount(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccount.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosEnterpriseDBClusterAccount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccountProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccount() {
        return software.amazon.jsii.Kernel.get(this, "attrAccount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccountType() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDmlAuthSetting() {
        return software.amazon.jsii.Kernel.get(this, "attrDmlAuthSetting", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAccount() {
        return software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccount(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "account", java.util.Objects.requireNonNull(value, "account is required"));
    }

    /**
     */
    public void setAccount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "account", java.util.Objects.requireNonNull(value, "account is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAccountType() {
        return software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccountType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accountType", java.util.Objects.requireNonNull(value, "accountType is required"));
    }

    /**
     */
    public void setAccountType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accountType", java.util.Objects.requireNonNull(value, "accountType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", java.util.Objects.requireNonNull(value, "dbInstanceId is required"));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", java.util.Objects.requireNonNull(value, "dbInstanceId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", java.util.Objects.requireNonNull(value, "password is required"));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "password", java.util.Objects.requireNonNull(value, "password is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDmlAuthSetting() {
        return software.amazon.jsii.Kernel.get(this, "dmlAuthSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDmlAuthSetting(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dmlAuthSetting", value);
    }

    /**
     */
    public void setDmlAuthSetting(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty value) {
        software.amazon.jsii.Kernel.set(this, "dmlAuthSetting", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty")
    @software.amazon.jsii.Jsii.Proxy(DmlAuthSettingProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DmlAuthSettingProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDdlAuthority();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDmlAuthority();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowDatabases() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowDictionaries() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DmlAuthSettingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DmlAuthSettingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DmlAuthSettingProperty> {
            java.lang.Object ddlAuthority;
            java.lang.Object dmlAuthority;
            java.lang.Object allowDatabases;
            java.lang.Object allowDictionaries;

            /**
             * Sets the value of {@link DmlAuthSettingProperty#getDdlAuthority}
             * @param ddlAuthority the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddlAuthority(java.lang.Boolean ddlAuthority) {
                this.ddlAuthority = ddlAuthority;
                return this;
            }

            /**
             * Sets the value of {@link DmlAuthSettingProperty#getDdlAuthority}
             * @param ddlAuthority the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddlAuthority(com.aliyun.ros.cdk.core.IResolvable ddlAuthority) {
                this.ddlAuthority = ddlAuthority;
                return this;
            }

            /**
             * Sets the value of {@link DmlAuthSettingProperty#getDmlAuthority}
             * @param dmlAuthority the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dmlAuthority(java.lang.Number dmlAuthority) {
                this.dmlAuthority = dmlAuthority;
                return this;
            }

            /**
             * Sets the value of {@link DmlAuthSettingProperty#getDmlAuthority}
             * @param dmlAuthority the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dmlAuthority(com.aliyun.ros.cdk.core.IResolvable dmlAuthority) {
                this.dmlAuthority = dmlAuthority;
                return this;
            }

            /**
             * Sets the value of {@link DmlAuthSettingProperty#getAllowDatabases}
             * @param allowDatabases the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowDatabases(com.aliyun.ros.cdk.core.IResolvable allowDatabases) {
                this.allowDatabases = allowDatabases;
                return this;
            }

            /**
             * Sets the value of {@link DmlAuthSettingProperty#getAllowDatabases}
             * @param allowDatabases the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowDatabases(java.util.List<? extends java.lang.Object> allowDatabases) {
                this.allowDatabases = allowDatabases;
                return this;
            }

            /**
             * Sets the value of {@link DmlAuthSettingProperty#getAllowDictionaries}
             * @param allowDictionaries the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowDictionaries(com.aliyun.ros.cdk.core.IResolvable allowDictionaries) {
                this.allowDictionaries = allowDictionaries;
                return this;
            }

            /**
             * Sets the value of {@link DmlAuthSettingProperty#getAllowDictionaries}
             * @param allowDictionaries the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowDictionaries(java.util.List<? extends java.lang.Object> allowDictionaries) {
                this.allowDictionaries = allowDictionaries;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DmlAuthSettingProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DmlAuthSettingProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DmlAuthSettingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DmlAuthSettingProperty {
            private final java.lang.Object ddlAuthority;
            private final java.lang.Object dmlAuthority;
            private final java.lang.Object allowDatabases;
            private final java.lang.Object allowDictionaries;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ddlAuthority = software.amazon.jsii.Kernel.get(this, "ddlAuthority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dmlAuthority = software.amazon.jsii.Kernel.get(this, "dmlAuthority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.allowDatabases = software.amazon.jsii.Kernel.get(this, "allowDatabases", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.allowDictionaries = software.amazon.jsii.Kernel.get(this, "allowDictionaries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ddlAuthority = java.util.Objects.requireNonNull(builder.ddlAuthority, "ddlAuthority is required");
                this.dmlAuthority = java.util.Objects.requireNonNull(builder.dmlAuthority, "dmlAuthority is required");
                this.allowDatabases = builder.allowDatabases;
                this.allowDictionaries = builder.allowDictionaries;
            }

            @Override
            public final java.lang.Object getDdlAuthority() {
                return this.ddlAuthority;
            }

            @Override
            public final java.lang.Object getDmlAuthority() {
                return this.dmlAuthority;
            }

            @Override
            public final java.lang.Object getAllowDatabases() {
                return this.allowDatabases;
            }

            @Override
            public final java.lang.Object getAllowDictionaries() {
                return this.allowDictionaries;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ddlAuthority", om.valueToTree(this.getDdlAuthority()));
                data.set("dmlAuthority", om.valueToTree(this.getDmlAuthority()));
                if (this.getAllowDatabases() != null) {
                    data.set("allowDatabases", om.valueToTree(this.getAllowDatabases()));
                }
                if (this.getAllowDictionaries() != null) {
                    data.set("allowDictionaries", om.valueToTree(this.getAllowDictionaries()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DmlAuthSettingProperty.Jsii$Proxy that = (DmlAuthSettingProperty.Jsii$Proxy) o;

                if (!ddlAuthority.equals(that.ddlAuthority)) return false;
                if (!dmlAuthority.equals(that.dmlAuthority)) return false;
                if (this.allowDatabases != null ? !this.allowDatabases.equals(that.allowDatabases) : that.allowDatabases != null) return false;
                return this.allowDictionaries != null ? this.allowDictionaries.equals(that.allowDictionaries) : that.allowDictionaries == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ddlAuthority.hashCode();
                result = 31 * result + (this.dmlAuthority.hashCode());
                result = 31 * result + (this.allowDatabases != null ? this.allowDatabases.hashCode() : 0);
                result = 31 * result + (this.allowDictionaries != null ? this.allowDictionaries.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccount}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccount> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccountProps.Builder();
        }

        /**
         * @return {@code this}
         * @param account This parameter is required.
         */
        public Builder account(final java.lang.String account) {
            this.props.account(account);
            return this;
        }
        /**
         * @return {@code this}
         * @param account This parameter is required.
         */
        public Builder account(final com.aliyun.ros.cdk.core.IResolvable account) {
            this.props.account(account);
            return this;
        }

        /**
         * @return {@code this}
         * @param accountType This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
        }
        /**
         * @return {@code this}
         * @param accountType This parameter is required.
         */
        public Builder accountType(final com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param dmlAuthSetting This parameter is required.
         */
        public Builder dmlAuthSetting(final com.aliyun.ros.cdk.core.IResolvable dmlAuthSetting) {
            this.props.dmlAuthSetting(dmlAuthSetting);
            return this;
        }
        /**
         * @return {@code this}
         * @param dmlAuthSetting This parameter is required.
         */
        public Builder dmlAuthSetting(final com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty dmlAuthSetting) {
            this.props.dmlAuthSetting(dmlAuthSetting);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccount}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccount build() {
            return new com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccount(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
