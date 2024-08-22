package com.aliyun.ros.cdk.config;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Config::Aggregator</code>, which is used to create an account group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:18.801Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosAggregator")
public class RosAggregator extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAggregator(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAggregator(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.config.RosAggregator.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAggregator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RosAggregatorProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAggregatorId() {
        return software.amazon.jsii.Kernel.get(this, "attrAggregatorId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAggregatorName() {
        return software.amazon.jsii.Kernel.get(this, "aggregatorName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAggregatorName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aggregatorName", java.util.Objects.requireNonNull(value, "aggregatorName is required"));
    }

    /**
     */
    public void setAggregatorName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aggregatorName", java.util.Objects.requireNonNull(value, "aggregatorName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAggregatorAccounts() {
        return software.amazon.jsii.Kernel.get(this, "aggregatorAccounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAggregatorAccounts(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aggregatorAccounts", value);
    }

    /**
     */
    public void setAggregatorAccounts(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.config.RosAggregator.AggregatorAccountsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.config.RosAggregator.AggregatorAccountsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "aggregatorAccounts", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAggregatorType() {
        return software.amazon.jsii.Kernel.get(this, "aggregatorType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAggregatorType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aggregatorType", value);
    }

    /**
     */
    public void setAggregatorType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aggregatorType", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosAggregator.AggregatorAccountsProperty")
    @software.amazon.jsii.Jsii.Proxy(AggregatorAccountsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AggregatorAccountsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAccountId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAccountType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AggregatorAccountsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AggregatorAccountsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AggregatorAccountsProperty> {
            java.lang.Object accountId;
            java.lang.Object accountName;
            java.lang.Object accountType;

            /**
             * Sets the value of {@link AggregatorAccountsProperty#getAccountId}
             * @param accountId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accountId(java.lang.Number accountId) {
                this.accountId = accountId;
                return this;
            }

            /**
             * Sets the value of {@link AggregatorAccountsProperty#getAccountId}
             * @param accountId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accountId(com.aliyun.ros.cdk.core.IResolvable accountId) {
                this.accountId = accountId;
                return this;
            }

            /**
             * Sets the value of {@link AggregatorAccountsProperty#getAccountName}
             * @param accountName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accountName(java.lang.String accountName) {
                this.accountName = accountName;
                return this;
            }

            /**
             * Sets the value of {@link AggregatorAccountsProperty#getAccountName}
             * @param accountName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
                this.accountName = accountName;
                return this;
            }

            /**
             * Sets the value of {@link AggregatorAccountsProperty#getAccountType}
             * @param accountType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accountType(java.lang.String accountType) {
                this.accountType = accountType;
                return this;
            }

            /**
             * Sets the value of {@link AggregatorAccountsProperty#getAccountType}
             * @param accountType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accountType(com.aliyun.ros.cdk.core.IResolvable accountType) {
                this.accountType = accountType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AggregatorAccountsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AggregatorAccountsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AggregatorAccountsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AggregatorAccountsProperty {
            private final java.lang.Object accountId;
            private final java.lang.Object accountName;
            private final java.lang.Object accountType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.accountId = software.amazon.jsii.Kernel.get(this, "accountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.accountId = java.util.Objects.requireNonNull(builder.accountId, "accountId is required");
                this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
                this.accountType = builder.accountType;
            }

            @Override
            public final java.lang.Object getAccountId() {
                return this.accountId;
            }

            @Override
            public final java.lang.Object getAccountName() {
                return this.accountName;
            }

            @Override
            public final java.lang.Object getAccountType() {
                return this.accountType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("accountId", om.valueToTree(this.getAccountId()));
                data.set("accountName", om.valueToTree(this.getAccountName()));
                if (this.getAccountType() != null) {
                    data.set("accountType", om.valueToTree(this.getAccountType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosAggregator.AggregatorAccountsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AggregatorAccountsProperty.Jsii$Proxy that = (AggregatorAccountsProperty.Jsii$Proxy) o;

                if (!accountId.equals(that.accountId)) return false;
                if (!accountName.equals(that.accountName)) return false;
                return this.accountType != null ? this.accountType.equals(that.accountType) : that.accountType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.accountId.hashCode();
                result = 31 * result + (this.accountName.hashCode());
                result = 31 * result + (this.accountType != null ? this.accountType.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.RosAggregator}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.RosAggregator> {
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
        private final com.aliyun.ros.cdk.config.RosAggregatorProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.RosAggregatorProps.Builder();
        }

        /**
         * @return {@code this}
         * @param aggregatorName This parameter is required.
         */
        public Builder aggregatorName(final java.lang.String aggregatorName) {
            this.props.aggregatorName(aggregatorName);
            return this;
        }
        /**
         * @return {@code this}
         * @param aggregatorName This parameter is required.
         */
        public Builder aggregatorName(final com.aliyun.ros.cdk.core.IResolvable aggregatorName) {
            this.props.aggregatorName(aggregatorName);
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
         * @param aggregatorAccounts This parameter is required.
         */
        public Builder aggregatorAccounts(final com.aliyun.ros.cdk.core.IResolvable aggregatorAccounts) {
            this.props.aggregatorAccounts(aggregatorAccounts);
            return this;
        }
        /**
         * @return {@code this}
         * @param aggregatorAccounts This parameter is required.
         */
        public Builder aggregatorAccounts(final java.util.List<? extends java.lang.Object> aggregatorAccounts) {
            this.props.aggregatorAccounts(aggregatorAccounts);
            return this;
        }

        /**
         * @return {@code this}
         * @param aggregatorType This parameter is required.
         */
        public Builder aggregatorType(final java.lang.String aggregatorType) {
            this.props.aggregatorType(aggregatorType);
            return this;
        }
        /**
         * @return {@code this}
         * @param aggregatorType This parameter is required.
         */
        public Builder aggregatorType(final com.aliyun.ros.cdk.core.IResolvable aggregatorType) {
            this.props.aggregatorType(aggregatorType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.config.RosAggregator}.
         */
        @Override
        public com.aliyun.ros.cdk.config.RosAggregator build() {
            return new com.aliyun.ros.cdk.config.RosAggregator(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
