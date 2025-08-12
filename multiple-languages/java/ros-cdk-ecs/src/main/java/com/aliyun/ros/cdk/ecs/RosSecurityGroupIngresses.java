package com.aliyun.ros.cdk.ecs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECS::SecurityGroupIngresses</code>, which is used to associate multiple inbound rules with a security group at a time.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.561Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroupIngresses")
public class RosSecurityGroupIngresses extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSecurityGroupIngresses(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSecurityGroupIngresses(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosSecurityGroupIngresses.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSecurityGroupIngresses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosSecurityGroupIngressesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPermissions() {
        return software.amazon.jsii.Kernel.get(this, "permissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPermissions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "permissions", java.util.Objects.requireNonNull(value, "permissions is required"));
    }

    /**
     */
    public void setPermissions(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ecs.RosSecurityGroupIngresses.PermissionsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ecs.RosSecurityGroupIngresses.PermissionsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "permissions", java.util.Objects.requireNonNull(value, "permissions is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroupIngresses.PermissionsProperty")
    @software.amazon.jsii.Jsii.Proxy(PermissionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PermissionsProperty extends software.amazon.jsii.JsiiSerializable {

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
         * @return a {@link Builder} of {@link PermissionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PermissionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PermissionsProperty> {
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
             * Sets the value of {@link PermissionsProperty#getIpProtocol}
             * @param ipProtocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipProtocol(java.lang.String ipProtocol) {
                this.ipProtocol = ipProtocol;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getIpProtocol}
             * @param ipProtocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipProtocol(com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
                this.ipProtocol = ipProtocol;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getPortRange}
             * @param portRange the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRange(java.lang.String portRange) {
                this.portRange = portRange;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getPortRange}
             * @param portRange the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRange(com.aliyun.ros.cdk.core.IResolvable portRange) {
                this.portRange = portRange;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getDestCidrIp}
             * @param destCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destCidrIp(java.lang.String destCidrIp) {
                this.destCidrIp = destCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getDestCidrIp}
             * @param destCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destCidrIp(com.aliyun.ros.cdk.core.IResolvable destCidrIp) {
                this.destCidrIp = destCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getIpv6DestCidrIp}
             * @param ipv6DestCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6DestCidrIp(java.lang.String ipv6DestCidrIp) {
                this.ipv6DestCidrIp = ipv6DestCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getIpv6DestCidrIp}
             * @param ipv6DestCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6DestCidrIp(com.aliyun.ros.cdk.core.IResolvable ipv6DestCidrIp) {
                this.ipv6DestCidrIp = ipv6DestCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getIpv6SourceCidrIp}
             * @param ipv6SourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6SourceCidrIp(java.lang.String ipv6SourceCidrIp) {
                this.ipv6SourceCidrIp = ipv6SourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getIpv6SourceCidrIp}
             * @param ipv6SourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6SourceCidrIp(com.aliyun.ros.cdk.core.IResolvable ipv6SourceCidrIp) {
                this.ipv6SourceCidrIp = ipv6SourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getNicType}
             * @param nicType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nicType(java.lang.String nicType) {
                this.nicType = nicType;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getNicType}
             * @param nicType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nicType(com.aliyun.ros.cdk.core.IResolvable nicType) {
                this.nicType = nicType;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getPolicy}
             * @param policy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policy(java.lang.String policy) {
                this.policy = policy;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getPolicy}
             * @param policy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
                this.policy = policy;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourceCidrIp}
             * @param sourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCidrIp(java.lang.String sourceCidrIp) {
                this.sourceCidrIp = sourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourceCidrIp}
             * @param sourceCidrIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCidrIp(com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
                this.sourceCidrIp = sourceCidrIp;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourceGroupId}
             * @param sourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupId(java.lang.String sourceGroupId) {
                this.sourceGroupId = sourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourceGroupId}
             * @param sourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupId(com.aliyun.ros.cdk.core.IResolvable sourceGroupId) {
                this.sourceGroupId = sourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourceGroupOwnerAccount}
             * @param sourceGroupOwnerAccount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupOwnerAccount(java.lang.String sourceGroupOwnerAccount) {
                this.sourceGroupOwnerAccount = sourceGroupOwnerAccount;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourceGroupOwnerAccount}
             * @param sourceGroupOwnerAccount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupOwnerAccount(com.aliyun.ros.cdk.core.IResolvable sourceGroupOwnerAccount) {
                this.sourceGroupOwnerAccount = sourceGroupOwnerAccount;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourceGroupOwnerId}
             * @param sourceGroupOwnerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupOwnerId(java.lang.String sourceGroupOwnerId) {
                this.sourceGroupOwnerId = sourceGroupOwnerId;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourceGroupOwnerId}
             * @param sourceGroupOwnerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceGroupOwnerId(com.aliyun.ros.cdk.core.IResolvable sourceGroupOwnerId) {
                this.sourceGroupOwnerId = sourceGroupOwnerId;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourcePortRange}
             * @param sourcePortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePortRange(java.lang.String sourcePortRange) {
                this.sourcePortRange = sourcePortRange;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourcePortRange}
             * @param sourcePortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePortRange(com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
                this.sourcePortRange = sourcePortRange;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourcePrefixListId}
             * @param sourcePrefixListId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePrefixListId(java.lang.String sourcePrefixListId) {
                this.sourcePrefixListId = sourcePrefixListId;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getSourcePrefixListId}
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
             * @return a new instance of {@link PermissionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PermissionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PermissionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PermissionsProperty {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSecurityGroupIngresses.PermissionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PermissionsProperty.Jsii$Proxy that = (PermissionsProperty.Jsii$Proxy) o;

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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosSecurityGroupIngresses}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosSecurityGroupIngresses> {
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
        private final com.aliyun.ros.cdk.ecs.RosSecurityGroupIngressesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosSecurityGroupIngressesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param permissions This parameter is required.
         */
        public Builder permissions(final com.aliyun.ros.cdk.core.IResolvable permissions) {
            this.props.permissions(permissions);
            return this;
        }
        /**
         * @return {@code this}
         * @param permissions This parameter is required.
         */
        public Builder permissions(final java.util.List<? extends java.lang.Object> permissions) {
            this.props.permissions(permissions);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosSecurityGroupIngresses}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosSecurityGroupIngresses build() {
            return new com.aliyun.ros.cdk.ecs.RosSecurityGroupIngresses(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
