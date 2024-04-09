package com.aliyun.ros.cdk.ens;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ENS::SecurityGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.903Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.RosSecurityGroup")
public class RosSecurityGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSecurityGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSecurityGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ens.RosSecurityGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSecurityGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.RosSecurityGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupEgress() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupEgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupEgress(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupEgress", value);
    }

    /**
     */
    public void setSecurityGroupEgress(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ens.RosSecurityGroup.SecurityGroupEgressProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ens.RosSecurityGroup.SecurityGroupEgressProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "securityGroupEgress", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIngress() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupIngress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupIngress(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupIngress", value);
    }

    /**
     */
    public void setSecurityGroupIngress(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ens.RosSecurityGroup.SecurityGroupIngressProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ens.RosSecurityGroup.SecurityGroupIngressProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "securityGroupIngress", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupName() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupName", value);
    }

    /**
     */
    public void setSecurityGroupName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupName", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.RosSecurityGroup.SecurityGroupEgressProperty")
    @software.amazon.jsii.Jsii.Proxy(SecurityGroupEgressProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SecurityGroupEgressProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getIpProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPortRange();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestCidrIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourcePortRange() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SecurityGroupEgressProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SecurityGroupEgressProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SecurityGroupEgressProperty> {
            java.lang.Object ipProtocol;
            java.lang.Object portRange;
            java.lang.Object destCidrIp;
            java.lang.Object policy;
            java.lang.Object priority;
            java.lang.Object sourcePortRange;

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getIpProtocol}
             * @param ipProtocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipProtocol(java.lang.String ipProtocol) {
                this.ipProtocol = ipProtocol;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getIpProtocol}
             * @param ipProtocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipProtocol(com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
                this.ipProtocol = ipProtocol;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getPortRange}
             * @param portRange the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRange(java.lang.String portRange) {
                this.portRange = portRange;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getPortRange}
             * @param portRange the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRange(com.aliyun.ros.cdk.core.IResolvable portRange) {
                this.portRange = portRange;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getDestCidrIp}
             * @param destCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destCidrIp(java.lang.String destCidrIp) {
                this.destCidrIp = destCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getDestCidrIp}
             * @param destCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destCidrIp(com.aliyun.ros.cdk.core.IResolvable destCidrIp) {
                this.destCidrIp = destCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getPolicy}
             * @param policy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policy(java.lang.String policy) {
                this.policy = policy;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getPolicy}
             * @param policy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
                this.policy = policy;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getSourcePortRange}
             * @param sourcePortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePortRange(java.lang.String sourcePortRange) {
                this.sourcePortRange = sourcePortRange;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getSourcePortRange}
             * @param sourcePortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePortRange(com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
                this.sourcePortRange = sourcePortRange;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SecurityGroupEgressProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SecurityGroupEgressProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SecurityGroupEgressProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityGroupEgressProperty {
            private final java.lang.Object ipProtocol;
            private final java.lang.Object portRange;
            private final java.lang.Object destCidrIp;
            private final java.lang.Object policy;
            private final java.lang.Object priority;
            private final java.lang.Object sourcePortRange;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.portRange = software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destCidrIp = software.amazon.jsii.Kernel.get(this, "destCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourcePortRange = software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ipProtocol = java.util.Objects.requireNonNull(builder.ipProtocol, "ipProtocol is required");
                this.portRange = java.util.Objects.requireNonNull(builder.portRange, "portRange is required");
                this.destCidrIp = builder.destCidrIp;
                this.policy = builder.policy;
                this.priority = builder.priority;
                this.sourcePortRange = builder.sourcePortRange;
            }

            @Override
            public final java.lang.Object getIpProtocol() {
                return this.ipProtocol;
            }

            @Override
            public final java.lang.Object getPortRange() {
                return this.portRange;
            }

            @Override
            public final java.lang.Object getDestCidrIp() {
                return this.destCidrIp;
            }

            @Override
            public final java.lang.Object getPolicy() {
                return this.policy;
            }

            @Override
            public final java.lang.Object getPriority() {
                return this.priority;
            }

            @Override
            public final java.lang.Object getSourcePortRange() {
                return this.sourcePortRange;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ipProtocol", om.valueToTree(this.getIpProtocol()));
                data.set("portRange", om.valueToTree(this.getPortRange()));
                if (this.getDestCidrIp() != null) {
                    data.set("destCidrIp", om.valueToTree(this.getDestCidrIp()));
                }
                if (this.getPolicy() != null) {
                    data.set("policy", om.valueToTree(this.getPolicy()));
                }
                if (this.getPriority() != null) {
                    data.set("priority", om.valueToTree(this.getPriority()));
                }
                if (this.getSourcePortRange() != null) {
                    data.set("sourcePortRange", om.valueToTree(this.getSourcePortRange()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.RosSecurityGroup.SecurityGroupEgressProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SecurityGroupEgressProperty.Jsii$Proxy that = (SecurityGroupEgressProperty.Jsii$Proxy) o;

                if (!ipProtocol.equals(that.ipProtocol)) return false;
                if (!portRange.equals(that.portRange)) return false;
                if (this.destCidrIp != null ? !this.destCidrIp.equals(that.destCidrIp) : that.destCidrIp != null) return false;
                if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                return this.sourcePortRange != null ? this.sourcePortRange.equals(that.sourcePortRange) : that.sourcePortRange == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ipProtocol.hashCode();
                result = 31 * result + (this.portRange.hashCode());
                result = 31 * result + (this.destCidrIp != null ? this.destCidrIp.hashCode() : 0);
                result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.sourcePortRange != null ? this.sourcePortRange.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.RosSecurityGroup.SecurityGroupIngressProperty")
    @software.amazon.jsii.Jsii.Proxy(SecurityGroupIngressProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SecurityGroupIngressProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getIpProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPortRange();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidrIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourcePortRange() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SecurityGroupIngressProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SecurityGroupIngressProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SecurityGroupIngressProperty> {
            java.lang.Object ipProtocol;
            java.lang.Object portRange;
            java.lang.Object policy;
            java.lang.Object priority;
            java.lang.Object sourceCidrIp;
            java.lang.Object sourcePortRange;

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getIpProtocol}
             * @param ipProtocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipProtocol(java.lang.String ipProtocol) {
                this.ipProtocol = ipProtocol;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getIpProtocol}
             * @param ipProtocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipProtocol(com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
                this.ipProtocol = ipProtocol;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getPortRange}
             * @param portRange the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRange(java.lang.String portRange) {
                this.portRange = portRange;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getPortRange}
             * @param portRange the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRange(com.aliyun.ros.cdk.core.IResolvable portRange) {
                this.portRange = portRange;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getPolicy}
             * @param policy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policy(java.lang.String policy) {
                this.policy = policy;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getPolicy}
             * @param policy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
                this.policy = policy;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getSourceCidrIp}
             * @param sourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCidrIp(java.lang.String sourceCidrIp) {
                this.sourceCidrIp = sourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getSourceCidrIp}
             * @param sourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCidrIp(com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
                this.sourceCidrIp = sourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getSourcePortRange}
             * @param sourcePortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePortRange(java.lang.String sourcePortRange) {
                this.sourcePortRange = sourcePortRange;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getSourcePortRange}
             * @param sourcePortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePortRange(com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
                this.sourcePortRange = sourcePortRange;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SecurityGroupIngressProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SecurityGroupIngressProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SecurityGroupIngressProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityGroupIngressProperty {
            private final java.lang.Object ipProtocol;
            private final java.lang.Object portRange;
            private final java.lang.Object policy;
            private final java.lang.Object priority;
            private final java.lang.Object sourceCidrIp;
            private final java.lang.Object sourcePortRange;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.portRange = software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceCidrIp = software.amazon.jsii.Kernel.get(this, "sourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourcePortRange = software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ipProtocol = java.util.Objects.requireNonNull(builder.ipProtocol, "ipProtocol is required");
                this.portRange = java.util.Objects.requireNonNull(builder.portRange, "portRange is required");
                this.policy = builder.policy;
                this.priority = builder.priority;
                this.sourceCidrIp = builder.sourceCidrIp;
                this.sourcePortRange = builder.sourcePortRange;
            }

            @Override
            public final java.lang.Object getIpProtocol() {
                return this.ipProtocol;
            }

            @Override
            public final java.lang.Object getPortRange() {
                return this.portRange;
            }

            @Override
            public final java.lang.Object getPolicy() {
                return this.policy;
            }

            @Override
            public final java.lang.Object getPriority() {
                return this.priority;
            }

            @Override
            public final java.lang.Object getSourceCidrIp() {
                return this.sourceCidrIp;
            }

            @Override
            public final java.lang.Object getSourcePortRange() {
                return this.sourcePortRange;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ipProtocol", om.valueToTree(this.getIpProtocol()));
                data.set("portRange", om.valueToTree(this.getPortRange()));
                if (this.getPolicy() != null) {
                    data.set("policy", om.valueToTree(this.getPolicy()));
                }
                if (this.getPriority() != null) {
                    data.set("priority", om.valueToTree(this.getPriority()));
                }
                if (this.getSourceCidrIp() != null) {
                    data.set("sourceCidrIp", om.valueToTree(this.getSourceCidrIp()));
                }
                if (this.getSourcePortRange() != null) {
                    data.set("sourcePortRange", om.valueToTree(this.getSourcePortRange()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.RosSecurityGroup.SecurityGroupIngressProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SecurityGroupIngressProperty.Jsii$Proxy that = (SecurityGroupIngressProperty.Jsii$Proxy) o;

                if (!ipProtocol.equals(that.ipProtocol)) return false;
                if (!portRange.equals(that.portRange)) return false;
                if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                if (this.sourceCidrIp != null ? !this.sourceCidrIp.equals(that.sourceCidrIp) : that.sourceCidrIp != null) return false;
                return this.sourcePortRange != null ? this.sourcePortRange.equals(that.sourcePortRange) : that.sourcePortRange == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ipProtocol.hashCode();
                result = 31 * result + (this.portRange.hashCode());
                result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.sourceCidrIp != null ? this.sourceCidrIp.hashCode() : 0);
                result = 31 * result + (this.sourcePortRange != null ? this.sourcePortRange.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ens.RosSecurityGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ens.RosSecurityGroup> {
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
        private final com.aliyun.ros.cdk.ens.RosSecurityGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ens.RosSecurityGroupProps.Builder();
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
         * @param securityGroupEgress This parameter is required.
         */
        public Builder securityGroupEgress(final com.aliyun.ros.cdk.core.IResolvable securityGroupEgress) {
            this.props.securityGroupEgress(securityGroupEgress);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupEgress This parameter is required.
         */
        public Builder securityGroupEgress(final java.util.List<? extends java.lang.Object> securityGroupEgress) {
            this.props.securityGroupEgress(securityGroupEgress);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupIngress This parameter is required.
         */
        public Builder securityGroupIngress(final com.aliyun.ros.cdk.core.IResolvable securityGroupIngress) {
            this.props.securityGroupIngress(securityGroupIngress);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupIngress This parameter is required.
         */
        public Builder securityGroupIngress(final java.util.List<? extends java.lang.Object> securityGroupIngress) {
            this.props.securityGroupIngress(securityGroupIngress);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupName This parameter is required.
         */
        public Builder securityGroupName(final java.lang.String securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupName This parameter is required.
         */
        public Builder securityGroupName(final com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ens.RosSecurityGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ens.RosSecurityGroup build() {
            return new com.aliyun.ros.cdk.ens.RosSecurityGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
