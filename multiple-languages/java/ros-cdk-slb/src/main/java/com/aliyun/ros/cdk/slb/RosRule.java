package com.aliyun.ros.cdk.slb;

/**
 * A ROS template type:  `ALIYUN::SLB::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:26.533Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosRule")
public class RosRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.slb.RosRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SLB::Rule`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.RosRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRules() {
        return software.amazon.jsii.Kernel.get(this, "attrRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort() {
        return software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", java.util.Objects.requireNonNull(value, "listenerPort is required"));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", java.util.Objects.requireNonNull(value, "listenerPort is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerId", java.util.Objects.requireNonNull(value, "loadBalancerId is required"));
    }

    /**
     */
    public void setLoadBalancerId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerId", java.util.Objects.requireNonNull(value, "loadBalancerId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleList() {
        return software.amazon.jsii.Kernel.get(this, "ruleList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleList", java.util.Objects.requireNonNull(value, "ruleList is required"));
    }

    /**
     */
    public void setRuleList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "ruleList", java.util.Objects.requireNonNull(value, "ruleList is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosRule.RuleListProperty")
    @software.amazon.jsii.Jsii.Proxy(RuleListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuleListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVServerGroupId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDomain() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUrl() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RuleListProperty> {
            java.lang.Object ruleName;
            java.lang.Object vServerGroupId;
            java.lang.Object domain;
            java.lang.Object url;

            /**
             * Sets the value of {@link RuleListProperty#getRuleName}
             * @param ruleName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleName(java.lang.String ruleName) {
                this.ruleName = ruleName;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getRuleName}
             * @param ruleName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
                this.ruleName = ruleName;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getVServerGroupId}
             * @param vServerGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vServerGroupId(java.lang.String vServerGroupId) {
                this.vServerGroupId = vServerGroupId;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getVServerGroupId}
             * @param vServerGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vServerGroupId(com.aliyun.ros.cdk.core.IResolvable vServerGroupId) {
                this.vServerGroupId = vServerGroupId;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getDomain}
             * @param domain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(java.lang.String domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getDomain}
             * @param domain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getUrl}
             * @param url the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder url(java.lang.String url) {
                this.url = url;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getUrl}
             * @param url the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder url(com.aliyun.ros.cdk.core.IResolvable url) {
                this.url = url;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RuleListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RuleListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleListProperty {
            private final java.lang.Object ruleName;
            private final java.lang.Object vServerGroupId;
            private final java.lang.Object domain;
            private final java.lang.Object url;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vServerGroupId = software.amazon.jsii.Kernel.get(this, "vServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.url = software.amazon.jsii.Kernel.get(this, "url", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
                this.vServerGroupId = java.util.Objects.requireNonNull(builder.vServerGroupId, "vServerGroupId is required");
                this.domain = builder.domain;
                this.url = builder.url;
            }

            @Override
            public final java.lang.Object getRuleName() {
                return this.ruleName;
            }

            @Override
            public final java.lang.Object getVServerGroupId() {
                return this.vServerGroupId;
            }

            @Override
            public final java.lang.Object getDomain() {
                return this.domain;
            }

            @Override
            public final java.lang.Object getUrl() {
                return this.url;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ruleName", om.valueToTree(this.getRuleName()));
                data.set("vServerGroupId", om.valueToTree(this.getVServerGroupId()));
                if (this.getDomain() != null) {
                    data.set("domain", om.valueToTree(this.getDomain()));
                }
                if (this.getUrl() != null) {
                    data.set("url", om.valueToTree(this.getUrl()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosRule.RuleListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RuleListProperty.Jsii$Proxy that = (RuleListProperty.Jsii$Proxy) o;

                if (!ruleName.equals(that.ruleName)) return false;
                if (!vServerGroupId.equals(that.vServerGroupId)) return false;
                if (this.domain != null ? !this.domain.equals(that.domain) : that.domain != null) return false;
                return this.url != null ? this.url.equals(that.url) : that.url == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ruleName.hashCode();
                result = 31 * result + (this.vServerGroupId.hashCode());
                result = 31 * result + (this.domain != null ? this.domain.hashCode() : 0);
                result = 31 * result + (this.url != null ? this.url.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.RosRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.RosRule> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.slb.RosRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.RosRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleList This parameter is required.
         */
        public Builder ruleList(final com.aliyun.ros.cdk.core.IResolvable ruleList) {
            this.props.ruleList(ruleList);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleList This parameter is required.
         */
        public Builder ruleList(final java.util.List<? extends java.lang.Object> ruleList) {
            this.props.ruleList(ruleList);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.slb.RosRule}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.RosRule build() {
            return new com.aliyun.ros.cdk.slb.RosRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
