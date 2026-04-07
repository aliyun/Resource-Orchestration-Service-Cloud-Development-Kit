package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::ContainerDefenseRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.624Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule")
public class RosContainerDefenseRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosContainerDefenseRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosContainerDefenseRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosContainerDefenseRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleAction() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleAction", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleType() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScope() {
        return software.amazon.jsii.Kernel.get(this, "attrScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "attrWhitelist", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleAction() {
        return software.amazon.jsii.Kernel.get(this, "ruleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleAction(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ruleAction", value);
    }

    /**
     */
    public void setRuleAction(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleAction", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleId() {
        return software.amazon.jsii.Kernel.get(this, "ruleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ruleId", value);
    }

    /**
     */
    public void setRuleId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", value);
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleSwitch() {
        return software.amazon.jsii.Kernel.get(this, "ruleSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleSwitch(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ruleSwitch", value);
    }

    /**
     */
    public void setRuleSwitch(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleSwitch", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleType() {
        return software.amazon.jsii.Kernel.get(this, "ruleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleType(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ruleType", value);
    }

    /**
     */
    public void setRuleType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scope", value);
    }

    /**
     */
    public void setScope(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule.ScopeProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule.ScopeProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "scope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "whitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWhitelist(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "whitelist", value);
    }

    /**
     */
    public void setWhitelist(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule.WhitelistProperty value) {
        software.amazon.jsii.Kernel.set(this, "whitelist", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWhitelistHash() {
        return software.amazon.jsii.Kernel.get(this, "whitelistHash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWhitelistHash(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "whitelistHash", value);
    }

    /**
     */
    public void setWhitelistHash(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "whitelistHash", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule.ScopeProperty")
    @software.amazon.jsii.Jsii.Proxy(ScopeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScopeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllNamespace() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaces() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ScopeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScopeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScopeProperty> {
            java.lang.Object allNamespace;
            java.lang.Object clusterId;
            java.lang.Object namespaces;

            /**
             * Sets the value of {@link ScopeProperty#getAllNamespace}
             * @param allNamespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allNamespace(java.lang.Number allNamespace) {
                this.allNamespace = allNamespace;
                return this;
            }

            /**
             * Sets the value of {@link ScopeProperty#getAllNamespace}
             * @param allNamespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allNamespace(com.aliyun.ros.cdk.core.IResolvable allNamespace) {
                this.allNamespace = allNamespace;
                return this;
            }

            /**
             * Sets the value of {@link ScopeProperty#getClusterId}
             * @param clusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clusterId(java.lang.String clusterId) {
                this.clusterId = clusterId;
                return this;
            }

            /**
             * Sets the value of {@link ScopeProperty#getClusterId}
             * @param clusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
                this.clusterId = clusterId;
                return this;
            }

            /**
             * Sets the value of {@link ScopeProperty#getNamespaces}
             * @param namespaces the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespaces(com.aliyun.ros.cdk.core.IResolvable namespaces) {
                this.namespaces = namespaces;
                return this;
            }

            /**
             * Sets the value of {@link ScopeProperty#getNamespaces}
             * @param namespaces the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespaces(java.util.List<? extends java.lang.Object> namespaces) {
                this.namespaces = namespaces;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScopeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScopeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScopeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScopeProperty {
            private final java.lang.Object allNamespace;
            private final java.lang.Object clusterId;
            private final java.lang.Object namespaces;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.allNamespace = software.amazon.jsii.Kernel.get(this, "allNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.namespaces = software.amazon.jsii.Kernel.get(this, "namespaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.allNamespace = builder.allNamespace;
                this.clusterId = builder.clusterId;
                this.namespaces = builder.namespaces;
            }

            @Override
            public final java.lang.Object getAllNamespace() {
                return this.allNamespace;
            }

            @Override
            public final java.lang.Object getClusterId() {
                return this.clusterId;
            }

            @Override
            public final java.lang.Object getNamespaces() {
                return this.namespaces;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAllNamespace() != null) {
                    data.set("allNamespace", om.valueToTree(this.getAllNamespace()));
                }
                if (this.getClusterId() != null) {
                    data.set("clusterId", om.valueToTree(this.getClusterId()));
                }
                if (this.getNamespaces() != null) {
                    data.set("namespaces", om.valueToTree(this.getNamespaces()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule.ScopeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScopeProperty.Jsii$Proxy that = (ScopeProperty.Jsii$Proxy) o;

                if (this.allNamespace != null ? !this.allNamespace.equals(that.allNamespace) : that.allNamespace != null) return false;
                if (this.clusterId != null ? !this.clusterId.equals(that.clusterId) : that.clusterId != null) return false;
                return this.namespaces != null ? this.namespaces.equals(that.namespaces) : that.namespaces == null;
            }

            @Override
            public final int hashCode() {
                int result = this.allNamespace != null ? this.allNamespace.hashCode() : 0;
                result = 31 * result + (this.clusterId != null ? this.clusterId.hashCode() : 0);
                result = 31 * result + (this.namespaces != null ? this.namespaces.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule.WhitelistProperty")
    @software.amazon.jsii.Jsii.Proxy(WhitelistProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WhitelistProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link WhitelistProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WhitelistProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WhitelistProperty> {
            java.lang.Object image;
            java.lang.Object path;

            /**
             * Sets the value of {@link WhitelistProperty#getImage}
             * @param image the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(com.aliyun.ros.cdk.core.IResolvable image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link WhitelistProperty#getImage}
             * @param image the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(java.util.List<? extends java.lang.Object> image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link WhitelistProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link WhitelistProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.util.List<? extends java.lang.Object> path) {
                this.path = path;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WhitelistProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WhitelistProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WhitelistProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WhitelistProperty {
            private final java.lang.Object image;
            private final java.lang.Object path;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.image = builder.image;
                this.path = builder.path;
            }

            @Override
            public final java.lang.Object getImage() {
                return this.image;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getImage() != null) {
                    data.set("image", om.valueToTree(this.getImage()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule.WhitelistProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WhitelistProperty.Jsii$Proxy that = (WhitelistProperty.Jsii$Proxy) o;

                if (this.image != null ? !this.image.equals(that.image) : that.image != null) return false;
                return this.path != null ? this.path.equals(that.path) : that.path == null;
            }

            @Override
            public final int hashCode() {
                int result = this.image != null ? this.image.hashCode() : 0;
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRuleProps.Builder();
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
         * @param ruleAction This parameter is required.
         */
        public Builder ruleAction(final java.lang.Number ruleAction) {
            this.props.ruleAction(ruleAction);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleAction This parameter is required.
         */
        public Builder ruleAction(final com.aliyun.ros.cdk.core.IResolvable ruleAction) {
            this.props.ruleAction(ruleAction);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleId This parameter is required.
         */
        public Builder ruleId(final java.lang.Number ruleId) {
            this.props.ruleId(ruleId);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleId This parameter is required.
         */
        public Builder ruleId(final com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.props.ruleId(ruleId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleSwitch This parameter is required.
         */
        public Builder ruleSwitch(final java.lang.Number ruleSwitch) {
            this.props.ruleSwitch(ruleSwitch);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleSwitch This parameter is required.
         */
        public Builder ruleSwitch(final com.aliyun.ros.cdk.core.IResolvable ruleSwitch) {
            this.props.ruleSwitch(ruleSwitch);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleType This parameter is required.
         */
        public Builder ruleType(final java.lang.Number ruleType) {
            this.props.ruleType(ruleType);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleType This parameter is required.
         */
        public Builder ruleType(final com.aliyun.ros.cdk.core.IResolvable ruleType) {
            this.props.ruleType(ruleType);
            return this;
        }

        /**
         * @return {@code this}
         * @param scope This parameter is required.
         */
        public Builder scope(final com.aliyun.ros.cdk.core.IResolvable scope) {
            this.props.scope(scope);
            return this;
        }
        /**
         * @return {@code this}
         * @param scope This parameter is required.
         */
        public Builder scope(final java.util.List<? extends java.lang.Object> scope) {
            this.props.scope(scope);
            return this;
        }

        /**
         * @return {@code this}
         * @param whitelist This parameter is required.
         */
        public Builder whitelist(final com.aliyun.ros.cdk.core.IResolvable whitelist) {
            this.props.whitelist(whitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param whitelist This parameter is required.
         */
        public Builder whitelist(final com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule.WhitelistProperty whitelist) {
            this.props.whitelist(whitelist);
            return this;
        }

        /**
         * @return {@code this}
         * @param whitelistHash This parameter is required.
         */
        public Builder whitelistHash(final java.lang.String whitelistHash) {
            this.props.whitelistHash(whitelistHash);
            return this;
        }
        /**
         * @return {@code this}
         * @param whitelistHash This parameter is required.
         */
        public Builder whitelistHash(final com.aliyun.ros.cdk.core.IResolvable whitelistHash) {
            this.props.whitelistHash(whitelistHash);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule build() {
            return new com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
