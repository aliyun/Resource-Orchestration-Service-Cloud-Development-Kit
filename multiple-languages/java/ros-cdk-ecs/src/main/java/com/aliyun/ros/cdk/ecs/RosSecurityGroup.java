package com.aliyun.ros.cdk.ecs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECS::SecurityGroup</code>, which is used to create a security group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.153Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroup")
public class RosSecurityGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSecurityGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSecurityGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosSecurityGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSecurityGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosSecurityGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
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
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ecs.RosSecurityGroup.SecurityGroupEgressProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ecs.RosSecurityGroup.SecurityGroupEgressProperty; received ")
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
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ecs.RosSecurityGroup.SecurityGroupIngressProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ecs.RosSecurityGroup.SecurityGroupIngressProperty; received ")
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupType() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupType", value);
    }

    /**
     */
    public void setSecurityGroupType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupEgressProperty")
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestCidrIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestGroupOwnerAccount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestGroupOwnerId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestPrefixListId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6DestCidrIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6SourceCidrIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNicType() {
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
            java.lang.Object description;
            java.lang.Object destCidrIp;
            java.lang.Object destGroupId;
            java.lang.Object destGroupOwnerAccount;
            java.lang.Object destGroupOwnerId;
            java.lang.Object destPrefixListId;
            java.lang.Object ipv6DestCidrIp;
            java.lang.Object ipv6SourceCidrIp;
            java.lang.Object nicType;
            java.lang.Object policy;
            java.lang.Object priority;
            java.lang.Object sourceCidrIp;
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
             * Sets the value of {@link SecurityGroupEgressProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
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
             * Sets the value of {@link SecurityGroupEgressProperty#getDestGroupId}
             * @param destGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destGroupId(java.lang.String destGroupId) {
                this.destGroupId = destGroupId;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getDestGroupId}
             * @param destGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destGroupId(com.aliyun.ros.cdk.core.IResolvable destGroupId) {
                this.destGroupId = destGroupId;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getDestGroupOwnerAccount}
             * @param destGroupOwnerAccount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destGroupOwnerAccount(java.lang.String destGroupOwnerAccount) {
                this.destGroupOwnerAccount = destGroupOwnerAccount;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getDestGroupOwnerAccount}
             * @param destGroupOwnerAccount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destGroupOwnerAccount(com.aliyun.ros.cdk.core.IResolvable destGroupOwnerAccount) {
                this.destGroupOwnerAccount = destGroupOwnerAccount;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getDestGroupOwnerId}
             * @param destGroupOwnerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destGroupOwnerId(java.lang.String destGroupOwnerId) {
                this.destGroupOwnerId = destGroupOwnerId;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getDestGroupOwnerId}
             * @param destGroupOwnerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destGroupOwnerId(com.aliyun.ros.cdk.core.IResolvable destGroupOwnerId) {
                this.destGroupOwnerId = destGroupOwnerId;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getDestPrefixListId}
             * @param destPrefixListId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destPrefixListId(java.lang.String destPrefixListId) {
                this.destPrefixListId = destPrefixListId;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getDestPrefixListId}
             * @param destPrefixListId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destPrefixListId(com.aliyun.ros.cdk.core.IResolvable destPrefixListId) {
                this.destPrefixListId = destPrefixListId;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getIpv6DestCidrIp}
             * @param ipv6DestCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6DestCidrIp(java.lang.String ipv6DestCidrIp) {
                this.ipv6DestCidrIp = ipv6DestCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getIpv6DestCidrIp}
             * @param ipv6DestCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6DestCidrIp(com.aliyun.ros.cdk.core.IResolvable ipv6DestCidrIp) {
                this.ipv6DestCidrIp = ipv6DestCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getIpv6SourceCidrIp}
             * @param ipv6SourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6SourceCidrIp(java.lang.String ipv6SourceCidrIp) {
                this.ipv6SourceCidrIp = ipv6SourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getIpv6SourceCidrIp}
             * @param ipv6SourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6SourceCidrIp(com.aliyun.ros.cdk.core.IResolvable ipv6SourceCidrIp) {
                this.ipv6SourceCidrIp = ipv6SourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getNicType}
             * @param nicType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nicType(java.lang.String nicType) {
                this.nicType = nicType;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getNicType}
             * @param nicType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nicType(com.aliyun.ros.cdk.core.IResolvable nicType) {
                this.nicType = nicType;
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
             * Sets the value of {@link SecurityGroupEgressProperty#getSourceCidrIp}
             * @param sourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCidrIp(java.lang.String sourceCidrIp) {
                this.sourceCidrIp = sourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupEgressProperty#getSourceCidrIp}
             * @param sourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCidrIp(com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
                this.sourceCidrIp = sourceCidrIp;
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
            private final java.lang.Object description;
            private final java.lang.Object destCidrIp;
            private final java.lang.Object destGroupId;
            private final java.lang.Object destGroupOwnerAccount;
            private final java.lang.Object destGroupOwnerId;
            private final java.lang.Object destPrefixListId;
            private final java.lang.Object ipv6DestCidrIp;
            private final java.lang.Object ipv6SourceCidrIp;
            private final java.lang.Object nicType;
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
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destCidrIp = software.amazon.jsii.Kernel.get(this, "destCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destGroupId = software.amazon.jsii.Kernel.get(this, "destGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destGroupOwnerAccount = software.amazon.jsii.Kernel.get(this, "destGroupOwnerAccount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destGroupOwnerId = software.amazon.jsii.Kernel.get(this, "destGroupOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destPrefixListId = software.amazon.jsii.Kernel.get(this, "destPrefixListId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipv6DestCidrIp = software.amazon.jsii.Kernel.get(this, "ipv6DestCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipv6SourceCidrIp = software.amazon.jsii.Kernel.get(this, "ipv6SourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nicType = software.amazon.jsii.Kernel.get(this, "nicType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
                this.description = builder.description;
                this.destCidrIp = builder.destCidrIp;
                this.destGroupId = builder.destGroupId;
                this.destGroupOwnerAccount = builder.destGroupOwnerAccount;
                this.destGroupOwnerId = builder.destGroupOwnerId;
                this.destPrefixListId = builder.destPrefixListId;
                this.ipv6DestCidrIp = builder.ipv6DestCidrIp;
                this.ipv6SourceCidrIp = builder.ipv6SourceCidrIp;
                this.nicType = builder.nicType;
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
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getDestCidrIp() {
                return this.destCidrIp;
            }

            @Override
            public final java.lang.Object getDestGroupId() {
                return this.destGroupId;
            }

            @Override
            public final java.lang.Object getDestGroupOwnerAccount() {
                return this.destGroupOwnerAccount;
            }

            @Override
            public final java.lang.Object getDestGroupOwnerId() {
                return this.destGroupOwnerId;
            }

            @Override
            public final java.lang.Object getDestPrefixListId() {
                return this.destPrefixListId;
            }

            @Override
            public final java.lang.Object getIpv6DestCidrIp() {
                return this.ipv6DestCidrIp;
            }

            @Override
            public final java.lang.Object getIpv6SourceCidrIp() {
                return this.ipv6SourceCidrIp;
            }

            @Override
            public final java.lang.Object getNicType() {
                return this.nicType;
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
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getDestCidrIp() != null) {
                    data.set("destCidrIp", om.valueToTree(this.getDestCidrIp()));
                }
                if (this.getDestGroupId() != null) {
                    data.set("destGroupId", om.valueToTree(this.getDestGroupId()));
                }
                if (this.getDestGroupOwnerAccount() != null) {
                    data.set("destGroupOwnerAccount", om.valueToTree(this.getDestGroupOwnerAccount()));
                }
                if (this.getDestGroupOwnerId() != null) {
                    data.set("destGroupOwnerId", om.valueToTree(this.getDestGroupOwnerId()));
                }
                if (this.getDestPrefixListId() != null) {
                    data.set("destPrefixListId", om.valueToTree(this.getDestPrefixListId()));
                }
                if (this.getIpv6DestCidrIp() != null) {
                    data.set("ipv6DestCidrIp", om.valueToTree(this.getIpv6DestCidrIp()));
                }
                if (this.getIpv6SourceCidrIp() != null) {
                    data.set("ipv6SourceCidrIp", om.valueToTree(this.getIpv6SourceCidrIp()));
                }
                if (this.getNicType() != null) {
                    data.set("nicType", om.valueToTree(this.getNicType()));
                }
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupEgressProperty"));
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
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.destCidrIp != null ? !this.destCidrIp.equals(that.destCidrIp) : that.destCidrIp != null) return false;
                if (this.destGroupId != null ? !this.destGroupId.equals(that.destGroupId) : that.destGroupId != null) return false;
                if (this.destGroupOwnerAccount != null ? !this.destGroupOwnerAccount.equals(that.destGroupOwnerAccount) : that.destGroupOwnerAccount != null) return false;
                if (this.destGroupOwnerId != null ? !this.destGroupOwnerId.equals(that.destGroupOwnerId) : that.destGroupOwnerId != null) return false;
                if (this.destPrefixListId != null ? !this.destPrefixListId.equals(that.destPrefixListId) : that.destPrefixListId != null) return false;
                if (this.ipv6DestCidrIp != null ? !this.ipv6DestCidrIp.equals(that.ipv6DestCidrIp) : that.ipv6DestCidrIp != null) return false;
                if (this.ipv6SourceCidrIp != null ? !this.ipv6SourceCidrIp.equals(that.ipv6SourceCidrIp) : that.ipv6SourceCidrIp != null) return false;
                if (this.nicType != null ? !this.nicType.equals(that.nicType) : that.nicType != null) return false;
                if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                if (this.sourceCidrIp != null ? !this.sourceCidrIp.equals(that.sourceCidrIp) : that.sourceCidrIp != null) return false;
                return this.sourcePortRange != null ? this.sourcePortRange.equals(that.sourcePortRange) : that.sourcePortRange == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ipProtocol.hashCode();
                result = 31 * result + (this.portRange.hashCode());
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.destCidrIp != null ? this.destCidrIp.hashCode() : 0);
                result = 31 * result + (this.destGroupId != null ? this.destGroupId.hashCode() : 0);
                result = 31 * result + (this.destGroupOwnerAccount != null ? this.destGroupOwnerAccount.hashCode() : 0);
                result = 31 * result + (this.destGroupOwnerId != null ? this.destGroupOwnerId.hashCode() : 0);
                result = 31 * result + (this.destPrefixListId != null ? this.destPrefixListId.hashCode() : 0);
                result = 31 * result + (this.ipv6DestCidrIp != null ? this.ipv6DestCidrIp.hashCode() : 0);
                result = 31 * result + (this.ipv6SourceCidrIp != null ? this.ipv6SourceCidrIp.hashCode() : 0);
                result = 31 * result + (this.nicType != null ? this.nicType.hashCode() : 0);
                result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.sourceCidrIp != null ? this.sourceCidrIp.hashCode() : 0);
                result = 31 * result + (this.sourcePortRange != null ? this.sourcePortRange.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupIngressProperty")
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestCidrIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6DestCidrIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6SourceCidrIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNicType() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidrIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceGroupOwnerAccount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceGroupOwnerId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourcePortRange() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourcePrefixListId() {
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
            java.lang.Object description;
            java.lang.Object destCidrIp;
            java.lang.Object ipv6DestCidrIp;
            java.lang.Object ipv6SourceCidrIp;
            java.lang.Object nicType;
            java.lang.Object policy;
            java.lang.Object priority;
            java.lang.Object sourceCidrIp;
            java.lang.Object sourceGroupId;
            java.lang.Object sourceGroupOwnerAccount;
            java.lang.Object sourceGroupOwnerId;
            java.lang.Object sourcePortRange;
            java.lang.Object sourcePrefixListId;

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
             * Sets the value of {@link SecurityGroupIngressProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getDestCidrIp}
             * @param destCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destCidrIp(java.lang.String destCidrIp) {
                this.destCidrIp = destCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getDestCidrIp}
             * @param destCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destCidrIp(com.aliyun.ros.cdk.core.IResolvable destCidrIp) {
                this.destCidrIp = destCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getIpv6DestCidrIp}
             * @param ipv6DestCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6DestCidrIp(java.lang.String ipv6DestCidrIp) {
                this.ipv6DestCidrIp = ipv6DestCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getIpv6DestCidrIp}
             * @param ipv6DestCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6DestCidrIp(com.aliyun.ros.cdk.core.IResolvable ipv6DestCidrIp) {
                this.ipv6DestCidrIp = ipv6DestCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getIpv6SourceCidrIp}
             * @param ipv6SourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6SourceCidrIp(java.lang.String ipv6SourceCidrIp) {
                this.ipv6SourceCidrIp = ipv6SourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getIpv6SourceCidrIp}
             * @param ipv6SourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6SourceCidrIp(com.aliyun.ros.cdk.core.IResolvable ipv6SourceCidrIp) {
                this.ipv6SourceCidrIp = ipv6SourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getNicType}
             * @param nicType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nicType(java.lang.String nicType) {
                this.nicType = nicType;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getNicType}
             * @param nicType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nicType(com.aliyun.ros.cdk.core.IResolvable nicType) {
                this.nicType = nicType;
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
             * Sets the value of {@link SecurityGroupIngressProperty#getSourceGroupId}
             * @param sourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupId(java.lang.String sourceGroupId) {
                this.sourceGroupId = sourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getSourceGroupId}
             * @param sourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupId(com.aliyun.ros.cdk.core.IResolvable sourceGroupId) {
                this.sourceGroupId = sourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getSourceGroupOwnerAccount}
             * @param sourceGroupOwnerAccount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupOwnerAccount(java.lang.String sourceGroupOwnerAccount) {
                this.sourceGroupOwnerAccount = sourceGroupOwnerAccount;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getSourceGroupOwnerAccount}
             * @param sourceGroupOwnerAccount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupOwnerAccount(com.aliyun.ros.cdk.core.IResolvable sourceGroupOwnerAccount) {
                this.sourceGroupOwnerAccount = sourceGroupOwnerAccount;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getSourceGroupOwnerId}
             * @param sourceGroupOwnerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupOwnerId(java.lang.String sourceGroupOwnerId) {
                this.sourceGroupOwnerId = sourceGroupOwnerId;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getSourceGroupOwnerId}
             * @param sourceGroupOwnerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupOwnerId(com.aliyun.ros.cdk.core.IResolvable sourceGroupOwnerId) {
                this.sourceGroupOwnerId = sourceGroupOwnerId;
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
             * Sets the value of {@link SecurityGroupIngressProperty#getSourcePrefixListId}
             * @param sourcePrefixListId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePrefixListId(java.lang.String sourcePrefixListId) {
                this.sourcePrefixListId = sourcePrefixListId;
                return this;
            }

            /**
             * Sets the value of {@link SecurityGroupIngressProperty#getSourcePrefixListId}
             * @param sourcePrefixListId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePrefixListId(com.aliyun.ros.cdk.core.IResolvable sourcePrefixListId) {
                this.sourcePrefixListId = sourcePrefixListId;
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
            private final java.lang.Object description;
            private final java.lang.Object destCidrIp;
            private final java.lang.Object ipv6DestCidrIp;
            private final java.lang.Object ipv6SourceCidrIp;
            private final java.lang.Object nicType;
            private final java.lang.Object policy;
            private final java.lang.Object priority;
            private final java.lang.Object sourceCidrIp;
            private final java.lang.Object sourceGroupId;
            private final java.lang.Object sourceGroupOwnerAccount;
            private final java.lang.Object sourceGroupOwnerId;
            private final java.lang.Object sourcePortRange;
            private final java.lang.Object sourcePrefixListId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.portRange = software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destCidrIp = software.amazon.jsii.Kernel.get(this, "destCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipv6DestCidrIp = software.amazon.jsii.Kernel.get(this, "ipv6DestCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipv6SourceCidrIp = software.amazon.jsii.Kernel.get(this, "ipv6SourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nicType = software.amazon.jsii.Kernel.get(this, "nicType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceCidrIp = software.amazon.jsii.Kernel.get(this, "sourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceGroupId = software.amazon.jsii.Kernel.get(this, "sourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceGroupOwnerAccount = software.amazon.jsii.Kernel.get(this, "sourceGroupOwnerAccount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceGroupOwnerId = software.amazon.jsii.Kernel.get(this, "sourceGroupOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourcePortRange = software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourcePrefixListId = software.amazon.jsii.Kernel.get(this, "sourcePrefixListId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ipProtocol = java.util.Objects.requireNonNull(builder.ipProtocol, "ipProtocol is required");
                this.portRange = java.util.Objects.requireNonNull(builder.portRange, "portRange is required");
                this.description = builder.description;
                this.destCidrIp = builder.destCidrIp;
                this.ipv6DestCidrIp = builder.ipv6DestCidrIp;
                this.ipv6SourceCidrIp = builder.ipv6SourceCidrIp;
                this.nicType = builder.nicType;
                this.policy = builder.policy;
                this.priority = builder.priority;
                this.sourceCidrIp = builder.sourceCidrIp;
                this.sourceGroupId = builder.sourceGroupId;
                this.sourceGroupOwnerAccount = builder.sourceGroupOwnerAccount;
                this.sourceGroupOwnerId = builder.sourceGroupOwnerId;
                this.sourcePortRange = builder.sourcePortRange;
                this.sourcePrefixListId = builder.sourcePrefixListId;
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
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getDestCidrIp() {
                return this.destCidrIp;
            }

            @Override
            public final java.lang.Object getIpv6DestCidrIp() {
                return this.ipv6DestCidrIp;
            }

            @Override
            public final java.lang.Object getIpv6SourceCidrIp() {
                return this.ipv6SourceCidrIp;
            }

            @Override
            public final java.lang.Object getNicType() {
                return this.nicType;
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
            public final java.lang.Object getSourceGroupId() {
                return this.sourceGroupId;
            }

            @Override
            public final java.lang.Object getSourceGroupOwnerAccount() {
                return this.sourceGroupOwnerAccount;
            }

            @Override
            public final java.lang.Object getSourceGroupOwnerId() {
                return this.sourceGroupOwnerId;
            }

            @Override
            public final java.lang.Object getSourcePortRange() {
                return this.sourcePortRange;
            }

            @Override
            public final java.lang.Object getSourcePrefixListId() {
                return this.sourcePrefixListId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ipProtocol", om.valueToTree(this.getIpProtocol()));
                data.set("portRange", om.valueToTree(this.getPortRange()));
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getDestCidrIp() != null) {
                    data.set("destCidrIp", om.valueToTree(this.getDestCidrIp()));
                }
                if (this.getIpv6DestCidrIp() != null) {
                    data.set("ipv6DestCidrIp", om.valueToTree(this.getIpv6DestCidrIp()));
                }
                if (this.getIpv6SourceCidrIp() != null) {
                    data.set("ipv6SourceCidrIp", om.valueToTree(this.getIpv6SourceCidrIp()));
                }
                if (this.getNicType() != null) {
                    data.set("nicType", om.valueToTree(this.getNicType()));
                }
                if (this.getPolicy() != null) {
                    data.set("policy", om.valueToTree(this.getPolicy()));
                }
                if (this.getPriority() != null) {
                    data.set("priority", om.valueToTree(this.getPriority()));
                }
                if (this.getSourceCidrIp() != null) {
                    data.set("sourceCidrIp", om.valueToTree(this.getSourceCidrIp()));
                }
                if (this.getSourceGroupId() != null) {
                    data.set("sourceGroupId", om.valueToTree(this.getSourceGroupId()));
                }
                if (this.getSourceGroupOwnerAccount() != null) {
                    data.set("sourceGroupOwnerAccount", om.valueToTree(this.getSourceGroupOwnerAccount()));
                }
                if (this.getSourceGroupOwnerId() != null) {
                    data.set("sourceGroupOwnerId", om.valueToTree(this.getSourceGroupOwnerId()));
                }
                if (this.getSourcePortRange() != null) {
                    data.set("sourcePortRange", om.valueToTree(this.getSourcePortRange()));
                }
                if (this.getSourcePrefixListId() != null) {
                    data.set("sourcePrefixListId", om.valueToTree(this.getSourcePrefixListId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupIngressProperty"));
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
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.destCidrIp != null ? !this.destCidrIp.equals(that.destCidrIp) : that.destCidrIp != null) return false;
                if (this.ipv6DestCidrIp != null ? !this.ipv6DestCidrIp.equals(that.ipv6DestCidrIp) : that.ipv6DestCidrIp != null) return false;
                if (this.ipv6SourceCidrIp != null ? !this.ipv6SourceCidrIp.equals(that.ipv6SourceCidrIp) : that.ipv6SourceCidrIp != null) return false;
                if (this.nicType != null ? !this.nicType.equals(that.nicType) : that.nicType != null) return false;
                if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                if (this.sourceCidrIp != null ? !this.sourceCidrIp.equals(that.sourceCidrIp) : that.sourceCidrIp != null) return false;
                if (this.sourceGroupId != null ? !this.sourceGroupId.equals(that.sourceGroupId) : that.sourceGroupId != null) return false;
                if (this.sourceGroupOwnerAccount != null ? !this.sourceGroupOwnerAccount.equals(that.sourceGroupOwnerAccount) : that.sourceGroupOwnerAccount != null) return false;
                if (this.sourceGroupOwnerId != null ? !this.sourceGroupOwnerId.equals(that.sourceGroupOwnerId) : that.sourceGroupOwnerId != null) return false;
                if (this.sourcePortRange != null ? !this.sourcePortRange.equals(that.sourcePortRange) : that.sourcePortRange != null) return false;
                return this.sourcePrefixListId != null ? this.sourcePrefixListId.equals(that.sourcePrefixListId) : that.sourcePrefixListId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ipProtocol.hashCode();
                result = 31 * result + (this.portRange.hashCode());
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.destCidrIp != null ? this.destCidrIp.hashCode() : 0);
                result = 31 * result + (this.ipv6DestCidrIp != null ? this.ipv6DestCidrIp.hashCode() : 0);
                result = 31 * result + (this.ipv6SourceCidrIp != null ? this.ipv6SourceCidrIp.hashCode() : 0);
                result = 31 * result + (this.nicType != null ? this.nicType.hashCode() : 0);
                result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.sourceCidrIp != null ? this.sourceCidrIp.hashCode() : 0);
                result = 31 * result + (this.sourceGroupId != null ? this.sourceGroupId.hashCode() : 0);
                result = 31 * result + (this.sourceGroupOwnerAccount != null ? this.sourceGroupOwnerAccount.hashCode() : 0);
                result = 31 * result + (this.sourceGroupOwnerId != null ? this.sourceGroupOwnerId.hashCode() : 0);
                result = 31 * result + (this.sourcePortRange != null ? this.sourcePortRange.hashCode() : 0);
                result = 31 * result + (this.sourcePrefixListId != null ? this.sourcePrefixListId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroup.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSecurityGroup.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosSecurityGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosSecurityGroup> {
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
        private final com.aliyun.ros.cdk.ecs.RosSecurityGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosSecurityGroupProps.Builder();
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
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
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
         * @return {@code this}
         * @param securityGroupType This parameter is required.
         */
        public Builder securityGroupType(final java.lang.String securityGroupType) {
            this.props.securityGroupType(securityGroupType);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupType This parameter is required.
         */
        public Builder securityGroupType(final com.aliyun.ros.cdk.core.IResolvable securityGroupType) {
            this.props.securityGroupType(securityGroupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosSecurityGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosSecurityGroup build() {
            return new com.aliyun.ros.cdk.ecs.RosSecurityGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
