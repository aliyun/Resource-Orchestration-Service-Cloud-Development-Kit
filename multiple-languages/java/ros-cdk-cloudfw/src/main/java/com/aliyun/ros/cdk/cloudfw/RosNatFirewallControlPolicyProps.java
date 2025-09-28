package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>RosNatFirewallControlPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.133Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosNatFirewallControlPolicyProps.Jsii$Proxy.class)
public interface RosNatFirewallControlPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclAction();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApplicationNameList();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestination();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirection();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatGatewayId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNewOrder();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProto();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSource();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPortGroup() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPortType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainResolveType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRelease() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepeatDays() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepeatEndTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepeatStartTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepeatType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNatFirewallControlPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNatFirewallControlPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNatFirewallControlPolicyProps> {
        java.lang.Object aclAction;
        java.lang.Object applicationNameList;
        java.lang.Object description;
        java.lang.Object destination;
        java.lang.Object destinationType;
        java.lang.Object direction;
        java.lang.Object natGatewayId;
        java.lang.Object newOrder;
        java.lang.Object proto;
        java.lang.Object source;
        java.lang.Object sourceType;
        java.lang.Object destPort;
        java.lang.Object destPortGroup;
        java.lang.Object destPortType;
        java.lang.Object domainResolveType;
        java.lang.Object endTime;
        java.lang.Object ipVersion;
        java.lang.Object release;
        java.lang.Object repeatDays;
        java.lang.Object repeatEndTime;
        java.lang.Object repeatStartTime;
        java.lang.Object repeatType;
        java.lang.Object startTime;

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getAclAction}
         * @param aclAction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclAction(java.lang.String aclAction) {
            this.aclAction = aclAction;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getAclAction}
         * @param aclAction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclAction(com.aliyun.ros.cdk.core.IResolvable aclAction) {
            this.aclAction = aclAction;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getApplicationNameList}
         * @param applicationNameList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationNameList(com.aliyun.ros.cdk.core.IResolvable applicationNameList) {
            this.applicationNameList = applicationNameList;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getApplicationNameList}
         * @param applicationNameList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationNameList(java.util.List<? extends java.lang.Object> applicationNameList) {
            this.applicationNameList = applicationNameList;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDestination}
         * @param destination the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destination(java.lang.String destination) {
            this.destination = destination;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDestination}
         * @param destination the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destination(com.aliyun.ros.cdk.core.IResolvable destination) {
            this.destination = destination;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDestinationType}
         * @param destinationType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationType(java.lang.String destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDestinationType}
         * @param destinationType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationType(com.aliyun.ros.cdk.core.IResolvable destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDirection}
         * @param direction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder direction(java.lang.String direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDirection}
         * @param direction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder direction(com.aliyun.ros.cdk.core.IResolvable direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getNatGatewayId}
         * @param natGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(java.lang.String natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getNatGatewayId}
         * @param natGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getNewOrder}
         * @param newOrder the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder newOrder(java.lang.Number newOrder) {
            this.newOrder = newOrder;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getNewOrder}
         * @param newOrder the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder newOrder(com.aliyun.ros.cdk.core.IResolvable newOrder) {
            this.newOrder = newOrder;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getProto}
         * @param proto the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder proto(java.lang.String proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getProto}
         * @param proto the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder proto(com.aliyun.ros.cdk.core.IResolvable proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getSource}
         * @param source the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getSource}
         * @param source the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getSourceType}
         * @param sourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getSourceType}
         * @param sourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDestPort}
         * @param destPort the value to be set.
         * @return {@code this}
         */
        public Builder destPort(java.lang.Number destPort) {
            this.destPort = destPort;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDestPort}
         * @param destPort the value to be set.
         * @return {@code this}
         */
        public Builder destPort(com.aliyun.ros.cdk.core.IResolvable destPort) {
            this.destPort = destPort;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDestPortGroup}
         * @param destPortGroup the value to be set.
         * @return {@code this}
         */
        public Builder destPortGroup(java.lang.String destPortGroup) {
            this.destPortGroup = destPortGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDestPortGroup}
         * @param destPortGroup the value to be set.
         * @return {@code this}
         */
        public Builder destPortGroup(com.aliyun.ros.cdk.core.IResolvable destPortGroup) {
            this.destPortGroup = destPortGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDestPortType}
         * @param destPortType the value to be set.
         * @return {@code this}
         */
        public Builder destPortType(java.lang.String destPortType) {
            this.destPortType = destPortType;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDestPortType}
         * @param destPortType the value to be set.
         * @return {@code this}
         */
        public Builder destPortType(com.aliyun.ros.cdk.core.IResolvable destPortType) {
            this.destPortType = destPortType;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDomainResolveType}
         * @param domainResolveType the value to be set.
         * @return {@code this}
         */
        public Builder domainResolveType(java.lang.Number domainResolveType) {
            this.domainResolveType = domainResolveType;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getDomainResolveType}
         * @param domainResolveType the value to be set.
         * @return {@code this}
         */
        public Builder domainResolveType(com.aliyun.ros.cdk.core.IResolvable domainResolveType) {
            this.domainResolveType = domainResolveType;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getEndTime}
         * @param endTime the value to be set.
         * @return {@code this}
         */
        public Builder endTime(java.lang.String endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getEndTime}
         * @param endTime the value to be set.
         * @return {@code this}
         */
        public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getIpVersion}
         * @param ipVersion the value to be set.
         * @return {@code this}
         */
        public Builder ipVersion(java.lang.Number ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getIpVersion}
         * @param ipVersion the value to be set.
         * @return {@code this}
         */
        public Builder ipVersion(com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getRelease}
         * @param release the value to be set.
         * @return {@code this}
         */
        public Builder release(java.lang.Boolean release) {
            this.release = release;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getRelease}
         * @param release the value to be set.
         * @return {@code this}
         */
        public Builder release(com.aliyun.ros.cdk.core.IResolvable release) {
            this.release = release;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getRepeatDays}
         * @param repeatDays the value to be set.
         * @return {@code this}
         */
        public Builder repeatDays(java.util.List<? extends java.lang.Object> repeatDays) {
            this.repeatDays = repeatDays;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getRepeatDays}
         * @param repeatDays the value to be set.
         * @return {@code this}
         */
        public Builder repeatDays(com.aliyun.ros.cdk.core.IResolvable repeatDays) {
            this.repeatDays = repeatDays;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getRepeatEndTime}
         * @param repeatEndTime the value to be set.
         * @return {@code this}
         */
        public Builder repeatEndTime(java.lang.String repeatEndTime) {
            this.repeatEndTime = repeatEndTime;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getRepeatEndTime}
         * @param repeatEndTime the value to be set.
         * @return {@code this}
         */
        public Builder repeatEndTime(com.aliyun.ros.cdk.core.IResolvable repeatEndTime) {
            this.repeatEndTime = repeatEndTime;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getRepeatStartTime}
         * @param repeatStartTime the value to be set.
         * @return {@code this}
         */
        public Builder repeatStartTime(java.lang.String repeatStartTime) {
            this.repeatStartTime = repeatStartTime;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getRepeatStartTime}
         * @param repeatStartTime the value to be set.
         * @return {@code this}
         */
        public Builder repeatStartTime(com.aliyun.ros.cdk.core.IResolvable repeatStartTime) {
            this.repeatStartTime = repeatStartTime;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getRepeatType}
         * @param repeatType the value to be set.
         * @return {@code this}
         */
        public Builder repeatType(java.lang.String repeatType) {
            this.repeatType = repeatType;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getRepeatType}
         * @param repeatType the value to be set.
         * @return {@code this}
         */
        public Builder repeatType(com.aliyun.ros.cdk.core.IResolvable repeatType) {
            this.repeatType = repeatType;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getStartTime}
         * @param startTime the value to be set.
         * @return {@code this}
         */
        public Builder startTime(java.lang.String startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link RosNatFirewallControlPolicyProps#getStartTime}
         * @param startTime the value to be set.
         * @return {@code this}
         */
        public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNatFirewallControlPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNatFirewallControlPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNatFirewallControlPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNatFirewallControlPolicyProps {
        private final java.lang.Object aclAction;
        private final java.lang.Object applicationNameList;
        private final java.lang.Object description;
        private final java.lang.Object destination;
        private final java.lang.Object destinationType;
        private final java.lang.Object direction;
        private final java.lang.Object natGatewayId;
        private final java.lang.Object newOrder;
        private final java.lang.Object proto;
        private final java.lang.Object source;
        private final java.lang.Object sourceType;
        private final java.lang.Object destPort;
        private final java.lang.Object destPortGroup;
        private final java.lang.Object destPortType;
        private final java.lang.Object domainResolveType;
        private final java.lang.Object endTime;
        private final java.lang.Object ipVersion;
        private final java.lang.Object release;
        private final java.lang.Object repeatDays;
        private final java.lang.Object repeatEndTime;
        private final java.lang.Object repeatStartTime;
        private final java.lang.Object repeatType;
        private final java.lang.Object startTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclAction = software.amazon.jsii.Kernel.get(this, "aclAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.applicationNameList = software.amazon.jsii.Kernel.get(this, "applicationNameList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destination = software.amazon.jsii.Kernel.get(this, "destination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationType = software.amazon.jsii.Kernel.get(this, "destinationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.direction = software.amazon.jsii.Kernel.get(this, "direction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natGatewayId = software.amazon.jsii.Kernel.get(this, "natGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.newOrder = software.amazon.jsii.Kernel.get(this, "newOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proto = software.amazon.jsii.Kernel.get(this, "proto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPort = software.amazon.jsii.Kernel.get(this, "destPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPortGroup = software.amazon.jsii.Kernel.get(this, "destPortGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPortType = software.amazon.jsii.Kernel.get(this, "destPortType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainResolveType = software.amazon.jsii.Kernel.get(this, "domainResolveType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endTime = software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipVersion = software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.release = software.amazon.jsii.Kernel.get(this, "release", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repeatDays = software.amazon.jsii.Kernel.get(this, "repeatDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repeatEndTime = software.amazon.jsii.Kernel.get(this, "repeatEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repeatStartTime = software.amazon.jsii.Kernel.get(this, "repeatStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repeatType = software.amazon.jsii.Kernel.get(this, "repeatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startTime = software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclAction = java.util.Objects.requireNonNull(builder.aclAction, "aclAction is required");
            this.applicationNameList = java.util.Objects.requireNonNull(builder.applicationNameList, "applicationNameList is required");
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.destination = java.util.Objects.requireNonNull(builder.destination, "destination is required");
            this.destinationType = java.util.Objects.requireNonNull(builder.destinationType, "destinationType is required");
            this.direction = java.util.Objects.requireNonNull(builder.direction, "direction is required");
            this.natGatewayId = java.util.Objects.requireNonNull(builder.natGatewayId, "natGatewayId is required");
            this.newOrder = java.util.Objects.requireNonNull(builder.newOrder, "newOrder is required");
            this.proto = java.util.Objects.requireNonNull(builder.proto, "proto is required");
            this.source = java.util.Objects.requireNonNull(builder.source, "source is required");
            this.sourceType = java.util.Objects.requireNonNull(builder.sourceType, "sourceType is required");
            this.destPort = builder.destPort;
            this.destPortGroup = builder.destPortGroup;
            this.destPortType = builder.destPortType;
            this.domainResolveType = builder.domainResolveType;
            this.endTime = builder.endTime;
            this.ipVersion = builder.ipVersion;
            this.release = builder.release;
            this.repeatDays = builder.repeatDays;
            this.repeatEndTime = builder.repeatEndTime;
            this.repeatStartTime = builder.repeatStartTime;
            this.repeatType = builder.repeatType;
            this.startTime = builder.startTime;
        }

        @Override
        public final java.lang.Object getAclAction() {
            return this.aclAction;
        }

        @Override
        public final java.lang.Object getApplicationNameList() {
            return this.applicationNameList;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDestination() {
            return this.destination;
        }

        @Override
        public final java.lang.Object getDestinationType() {
            return this.destinationType;
        }

        @Override
        public final java.lang.Object getDirection() {
            return this.direction;
        }

        @Override
        public final java.lang.Object getNatGatewayId() {
            return this.natGatewayId;
        }

        @Override
        public final java.lang.Object getNewOrder() {
            return this.newOrder;
        }

        @Override
        public final java.lang.Object getProto() {
            return this.proto;
        }

        @Override
        public final java.lang.Object getSource() {
            return this.source;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        public final java.lang.Object getDestPort() {
            return this.destPort;
        }

        @Override
        public final java.lang.Object getDestPortGroup() {
            return this.destPortGroup;
        }

        @Override
        public final java.lang.Object getDestPortType() {
            return this.destPortType;
        }

        @Override
        public final java.lang.Object getDomainResolveType() {
            return this.domainResolveType;
        }

        @Override
        public final java.lang.Object getEndTime() {
            return this.endTime;
        }

        @Override
        public final java.lang.Object getIpVersion() {
            return this.ipVersion;
        }

        @Override
        public final java.lang.Object getRelease() {
            return this.release;
        }

        @Override
        public final java.lang.Object getRepeatDays() {
            return this.repeatDays;
        }

        @Override
        public final java.lang.Object getRepeatEndTime() {
            return this.repeatEndTime;
        }

        @Override
        public final java.lang.Object getRepeatStartTime() {
            return this.repeatStartTime;
        }

        @Override
        public final java.lang.Object getRepeatType() {
            return this.repeatType;
        }

        @Override
        public final java.lang.Object getStartTime() {
            return this.startTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aclAction", om.valueToTree(this.getAclAction()));
            data.set("applicationNameList", om.valueToTree(this.getApplicationNameList()));
            data.set("description", om.valueToTree(this.getDescription()));
            data.set("destination", om.valueToTree(this.getDestination()));
            data.set("destinationType", om.valueToTree(this.getDestinationType()));
            data.set("direction", om.valueToTree(this.getDirection()));
            data.set("natGatewayId", om.valueToTree(this.getNatGatewayId()));
            data.set("newOrder", om.valueToTree(this.getNewOrder()));
            data.set("proto", om.valueToTree(this.getProto()));
            data.set("source", om.valueToTree(this.getSource()));
            data.set("sourceType", om.valueToTree(this.getSourceType()));
            if (this.getDestPort() != null) {
                data.set("destPort", om.valueToTree(this.getDestPort()));
            }
            if (this.getDestPortGroup() != null) {
                data.set("destPortGroup", om.valueToTree(this.getDestPortGroup()));
            }
            if (this.getDestPortType() != null) {
                data.set("destPortType", om.valueToTree(this.getDestPortType()));
            }
            if (this.getDomainResolveType() != null) {
                data.set("domainResolveType", om.valueToTree(this.getDomainResolveType()));
            }
            if (this.getEndTime() != null) {
                data.set("endTime", om.valueToTree(this.getEndTime()));
            }
            if (this.getIpVersion() != null) {
                data.set("ipVersion", om.valueToTree(this.getIpVersion()));
            }
            if (this.getRelease() != null) {
                data.set("release", om.valueToTree(this.getRelease()));
            }
            if (this.getRepeatDays() != null) {
                data.set("repeatDays", om.valueToTree(this.getRepeatDays()));
            }
            if (this.getRepeatEndTime() != null) {
                data.set("repeatEndTime", om.valueToTree(this.getRepeatEndTime()));
            }
            if (this.getRepeatStartTime() != null) {
                data.set("repeatStartTime", om.valueToTree(this.getRepeatStartTime()));
            }
            if (this.getRepeatType() != null) {
                data.set("repeatType", om.valueToTree(this.getRepeatType()));
            }
            if (this.getStartTime() != null) {
                data.set("startTime", om.valueToTree(this.getStartTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNatFirewallControlPolicyProps.Jsii$Proxy that = (RosNatFirewallControlPolicyProps.Jsii$Proxy) o;

            if (!aclAction.equals(that.aclAction)) return false;
            if (!applicationNameList.equals(that.applicationNameList)) return false;
            if (!description.equals(that.description)) return false;
            if (!destination.equals(that.destination)) return false;
            if (!destinationType.equals(that.destinationType)) return false;
            if (!direction.equals(that.direction)) return false;
            if (!natGatewayId.equals(that.natGatewayId)) return false;
            if (!newOrder.equals(that.newOrder)) return false;
            if (!proto.equals(that.proto)) return false;
            if (!source.equals(that.source)) return false;
            if (!sourceType.equals(that.sourceType)) return false;
            if (this.destPort != null ? !this.destPort.equals(that.destPort) : that.destPort != null) return false;
            if (this.destPortGroup != null ? !this.destPortGroup.equals(that.destPortGroup) : that.destPortGroup != null) return false;
            if (this.destPortType != null ? !this.destPortType.equals(that.destPortType) : that.destPortType != null) return false;
            if (this.domainResolveType != null ? !this.domainResolveType.equals(that.domainResolveType) : that.domainResolveType != null) return false;
            if (this.endTime != null ? !this.endTime.equals(that.endTime) : that.endTime != null) return false;
            if (this.ipVersion != null ? !this.ipVersion.equals(that.ipVersion) : that.ipVersion != null) return false;
            if (this.release != null ? !this.release.equals(that.release) : that.release != null) return false;
            if (this.repeatDays != null ? !this.repeatDays.equals(that.repeatDays) : that.repeatDays != null) return false;
            if (this.repeatEndTime != null ? !this.repeatEndTime.equals(that.repeatEndTime) : that.repeatEndTime != null) return false;
            if (this.repeatStartTime != null ? !this.repeatStartTime.equals(that.repeatStartTime) : that.repeatStartTime != null) return false;
            if (this.repeatType != null ? !this.repeatType.equals(that.repeatType) : that.repeatType != null) return false;
            return this.startTime != null ? this.startTime.equals(that.startTime) : that.startTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aclAction.hashCode();
            result = 31 * result + (this.applicationNameList.hashCode());
            result = 31 * result + (this.description.hashCode());
            result = 31 * result + (this.destination.hashCode());
            result = 31 * result + (this.destinationType.hashCode());
            result = 31 * result + (this.direction.hashCode());
            result = 31 * result + (this.natGatewayId.hashCode());
            result = 31 * result + (this.newOrder.hashCode());
            result = 31 * result + (this.proto.hashCode());
            result = 31 * result + (this.source.hashCode());
            result = 31 * result + (this.sourceType.hashCode());
            result = 31 * result + (this.destPort != null ? this.destPort.hashCode() : 0);
            result = 31 * result + (this.destPortGroup != null ? this.destPortGroup.hashCode() : 0);
            result = 31 * result + (this.destPortType != null ? this.destPortType.hashCode() : 0);
            result = 31 * result + (this.domainResolveType != null ? this.domainResolveType.hashCode() : 0);
            result = 31 * result + (this.endTime != null ? this.endTime.hashCode() : 0);
            result = 31 * result + (this.ipVersion != null ? this.ipVersion.hashCode() : 0);
            result = 31 * result + (this.release != null ? this.release.hashCode() : 0);
            result = 31 * result + (this.repeatDays != null ? this.repeatDays.hashCode() : 0);
            result = 31 * result + (this.repeatEndTime != null ? this.repeatEndTime.hashCode() : 0);
            result = 31 * result + (this.repeatStartTime != null ? this.repeatStartTime.hashCode() : 0);
            result = 31 * result + (this.repeatType != null ? this.repeatType.hashCode() : 0);
            result = 31 * result + (this.startTime != null ? this.startTime.hashCode() : 0);
            return result;
        }
    }
}
