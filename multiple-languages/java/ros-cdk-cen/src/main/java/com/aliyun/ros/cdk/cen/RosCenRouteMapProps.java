package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>RosCenRouteMap</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenroutemap
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:18.168Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosCenRouteMapProps")
@software.amazon.jsii.Jsii.Proxy(RosCenRouteMapProps.Jsii$Proxy.class)
public interface RosCenRouteMapProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMapResult();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransmitDirection();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAsPathMatchMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCidrMatchMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommunityMatchMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommunityOperateMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationChildInstanceTypes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationCidrBlocks() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationInstanceIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationInstanceIdsReverseMatch() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationRouteTableIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchAsns() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchCommunitySet() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNextPriority() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOperateCommunitySet() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreference() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrependAsPath() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTypes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceChildInstanceTypes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceInstanceIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceInstanceIdsReverseMatch() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceRegionIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceRouteTableIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCenRouteMapProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCenRouteMapProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCenRouteMapProps> {
        java.lang.Object cenId;
        java.lang.Object cenRegionId;
        java.lang.Object mapResult;
        java.lang.Object priority;
        java.lang.Object transmitDirection;
        java.lang.Object asPathMatchMode;
        java.lang.Object cidrMatchMode;
        java.lang.Object communityMatchMode;
        java.lang.Object communityOperateMode;
        java.lang.Object description;
        java.lang.Object destinationChildInstanceTypes;
        java.lang.Object destinationCidrBlocks;
        java.lang.Object destinationInstanceIds;
        java.lang.Object destinationInstanceIdsReverseMatch;
        java.lang.Object destinationRouteTableIds;
        java.lang.Object matchAsns;
        java.lang.Object matchCommunitySet;
        java.lang.Object nextPriority;
        java.lang.Object operateCommunitySet;
        java.lang.Object preference;
        java.lang.Object prependAsPath;
        java.lang.Object routeTypes;
        java.lang.Object sourceChildInstanceTypes;
        java.lang.Object sourceInstanceIds;
        java.lang.Object sourceInstanceIdsReverseMatch;
        java.lang.Object sourceRegionIds;
        java.lang.Object sourceRouteTableIds;

        /**
         * Sets the value of {@link RosCenRouteMapProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getCenRegionId}
         * @param cenRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenRegionId(java.lang.String cenRegionId) {
            this.cenRegionId = cenRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getCenRegionId}
         * @param cenRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenRegionId(com.aliyun.ros.cdk.core.IResolvable cenRegionId) {
            this.cenRegionId = cenRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getMapResult}
         * @param mapResult the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder mapResult(java.lang.String mapResult) {
            this.mapResult = mapResult;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getMapResult}
         * @param mapResult the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder mapResult(com.aliyun.ros.cdk.core.IResolvable mapResult) {
            this.mapResult = mapResult;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getPriority}
         * @param priority the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getPriority}
         * @param priority the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getTransmitDirection}
         * @param transmitDirection the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transmitDirection(java.lang.String transmitDirection) {
            this.transmitDirection = transmitDirection;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getTransmitDirection}
         * @param transmitDirection the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transmitDirection(com.aliyun.ros.cdk.core.IResolvable transmitDirection) {
            this.transmitDirection = transmitDirection;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getAsPathMatchMode}
         * @param asPathMatchMode the value to be set.
         * @return {@code this}
         */
        public Builder asPathMatchMode(java.lang.String asPathMatchMode) {
            this.asPathMatchMode = asPathMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getAsPathMatchMode}
         * @param asPathMatchMode the value to be set.
         * @return {@code this}
         */
        public Builder asPathMatchMode(com.aliyun.ros.cdk.core.IResolvable asPathMatchMode) {
            this.asPathMatchMode = asPathMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getCidrMatchMode}
         * @param cidrMatchMode the value to be set.
         * @return {@code this}
         */
        public Builder cidrMatchMode(java.lang.String cidrMatchMode) {
            this.cidrMatchMode = cidrMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getCidrMatchMode}
         * @param cidrMatchMode the value to be set.
         * @return {@code this}
         */
        public Builder cidrMatchMode(com.aliyun.ros.cdk.core.IResolvable cidrMatchMode) {
            this.cidrMatchMode = cidrMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getCommunityMatchMode}
         * @param communityMatchMode the value to be set.
         * @return {@code this}
         */
        public Builder communityMatchMode(java.lang.String communityMatchMode) {
            this.communityMatchMode = communityMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getCommunityMatchMode}
         * @param communityMatchMode the value to be set.
         * @return {@code this}
         */
        public Builder communityMatchMode(com.aliyun.ros.cdk.core.IResolvable communityMatchMode) {
            this.communityMatchMode = communityMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getCommunityOperateMode}
         * @param communityOperateMode the value to be set.
         * @return {@code this}
         */
        public Builder communityOperateMode(java.lang.String communityOperateMode) {
            this.communityOperateMode = communityOperateMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getCommunityOperateMode}
         * @param communityOperateMode the value to be set.
         * @return {@code this}
         */
        public Builder communityOperateMode(com.aliyun.ros.cdk.core.IResolvable communityOperateMode) {
            this.communityOperateMode = communityOperateMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDestinationChildInstanceTypes}
         * @param destinationChildInstanceTypes the value to be set.
         * @return {@code this}
         */
        public Builder destinationChildInstanceTypes(com.aliyun.ros.cdk.core.IResolvable destinationChildInstanceTypes) {
            this.destinationChildInstanceTypes = destinationChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDestinationChildInstanceTypes}
         * @param destinationChildInstanceTypes the value to be set.
         * @return {@code this}
         */
        public Builder destinationChildInstanceTypes(java.util.List<? extends java.lang.Object> destinationChildInstanceTypes) {
            this.destinationChildInstanceTypes = destinationChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDestinationCidrBlocks}
         * @param destinationCidrBlocks the value to be set.
         * @return {@code this}
         */
        public Builder destinationCidrBlocks(com.aliyun.ros.cdk.core.IResolvable destinationCidrBlocks) {
            this.destinationCidrBlocks = destinationCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDestinationCidrBlocks}
         * @param destinationCidrBlocks the value to be set.
         * @return {@code this}
         */
        public Builder destinationCidrBlocks(java.util.List<? extends java.lang.Object> destinationCidrBlocks) {
            this.destinationCidrBlocks = destinationCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDestinationInstanceIds}
         * @param destinationInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder destinationInstanceIds(com.aliyun.ros.cdk.core.IResolvable destinationInstanceIds) {
            this.destinationInstanceIds = destinationInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDestinationInstanceIds}
         * @param destinationInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder destinationInstanceIds(java.util.List<? extends java.lang.Object> destinationInstanceIds) {
            this.destinationInstanceIds = destinationInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDestinationInstanceIdsReverseMatch}
         * @param destinationInstanceIdsReverseMatch the value to be set.
         * @return {@code this}
         */
        public Builder destinationInstanceIdsReverseMatch(java.lang.Boolean destinationInstanceIdsReverseMatch) {
            this.destinationInstanceIdsReverseMatch = destinationInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDestinationInstanceIdsReverseMatch}
         * @param destinationInstanceIdsReverseMatch the value to be set.
         * @return {@code this}
         */
        public Builder destinationInstanceIdsReverseMatch(com.aliyun.ros.cdk.core.IResolvable destinationInstanceIdsReverseMatch) {
            this.destinationInstanceIdsReverseMatch = destinationInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDestinationRouteTableIds}
         * @param destinationRouteTableIds the value to be set.
         * @return {@code this}
         */
        public Builder destinationRouteTableIds(com.aliyun.ros.cdk.core.IResolvable destinationRouteTableIds) {
            this.destinationRouteTableIds = destinationRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getDestinationRouteTableIds}
         * @param destinationRouteTableIds the value to be set.
         * @return {@code this}
         */
        public Builder destinationRouteTableIds(java.util.List<? extends java.lang.Object> destinationRouteTableIds) {
            this.destinationRouteTableIds = destinationRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getMatchAsns}
         * @param matchAsns the value to be set.
         * @return {@code this}
         */
        public Builder matchAsns(com.aliyun.ros.cdk.core.IResolvable matchAsns) {
            this.matchAsns = matchAsns;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getMatchAsns}
         * @param matchAsns the value to be set.
         * @return {@code this}
         */
        public Builder matchAsns(java.util.List<? extends java.lang.Object> matchAsns) {
            this.matchAsns = matchAsns;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getMatchCommunitySet}
         * @param matchCommunitySet the value to be set.
         * @return {@code this}
         */
        public Builder matchCommunitySet(com.aliyun.ros.cdk.core.IResolvable matchCommunitySet) {
            this.matchCommunitySet = matchCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getMatchCommunitySet}
         * @param matchCommunitySet the value to be set.
         * @return {@code this}
         */
        public Builder matchCommunitySet(java.util.List<? extends java.lang.Object> matchCommunitySet) {
            this.matchCommunitySet = matchCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getNextPriority}
         * @param nextPriority the value to be set.
         * @return {@code this}
         */
        public Builder nextPriority(java.lang.Number nextPriority) {
            this.nextPriority = nextPriority;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getNextPriority}
         * @param nextPriority the value to be set.
         * @return {@code this}
         */
        public Builder nextPriority(com.aliyun.ros.cdk.core.IResolvable nextPriority) {
            this.nextPriority = nextPriority;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getOperateCommunitySet}
         * @param operateCommunitySet the value to be set.
         * @return {@code this}
         */
        public Builder operateCommunitySet(com.aliyun.ros.cdk.core.IResolvable operateCommunitySet) {
            this.operateCommunitySet = operateCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getOperateCommunitySet}
         * @param operateCommunitySet the value to be set.
         * @return {@code this}
         */
        public Builder operateCommunitySet(java.util.List<? extends java.lang.Object> operateCommunitySet) {
            this.operateCommunitySet = operateCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getPreference}
         * @param preference the value to be set.
         * @return {@code this}
         */
        public Builder preference(java.lang.Number preference) {
            this.preference = preference;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getPreference}
         * @param preference the value to be set.
         * @return {@code this}
         */
        public Builder preference(com.aliyun.ros.cdk.core.IResolvable preference) {
            this.preference = preference;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getPrependAsPath}
         * @param prependAsPath the value to be set.
         * @return {@code this}
         */
        public Builder prependAsPath(com.aliyun.ros.cdk.core.IResolvable prependAsPath) {
            this.prependAsPath = prependAsPath;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getPrependAsPath}
         * @param prependAsPath the value to be set.
         * @return {@code this}
         */
        public Builder prependAsPath(java.util.List<? extends java.lang.Object> prependAsPath) {
            this.prependAsPath = prependAsPath;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getRouteTypes}
         * @param routeTypes the value to be set.
         * @return {@code this}
         */
        public Builder routeTypes(com.aliyun.ros.cdk.core.IResolvable routeTypes) {
            this.routeTypes = routeTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getRouteTypes}
         * @param routeTypes the value to be set.
         * @return {@code this}
         */
        public Builder routeTypes(java.util.List<? extends java.lang.Object> routeTypes) {
            this.routeTypes = routeTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getSourceChildInstanceTypes}
         * @param sourceChildInstanceTypes the value to be set.
         * @return {@code this}
         */
        public Builder sourceChildInstanceTypes(com.aliyun.ros.cdk.core.IResolvable sourceChildInstanceTypes) {
            this.sourceChildInstanceTypes = sourceChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getSourceChildInstanceTypes}
         * @param sourceChildInstanceTypes the value to be set.
         * @return {@code this}
         */
        public Builder sourceChildInstanceTypes(java.util.List<? extends java.lang.Object> sourceChildInstanceTypes) {
            this.sourceChildInstanceTypes = sourceChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getSourceInstanceIds}
         * @param sourceInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder sourceInstanceIds(com.aliyun.ros.cdk.core.IResolvable sourceInstanceIds) {
            this.sourceInstanceIds = sourceInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getSourceInstanceIds}
         * @param sourceInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder sourceInstanceIds(java.util.List<? extends java.lang.Object> sourceInstanceIds) {
            this.sourceInstanceIds = sourceInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getSourceInstanceIdsReverseMatch}
         * @param sourceInstanceIdsReverseMatch the value to be set.
         * @return {@code this}
         */
        public Builder sourceInstanceIdsReverseMatch(java.lang.Boolean sourceInstanceIdsReverseMatch) {
            this.sourceInstanceIdsReverseMatch = sourceInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getSourceInstanceIdsReverseMatch}
         * @param sourceInstanceIdsReverseMatch the value to be set.
         * @return {@code this}
         */
        public Builder sourceInstanceIdsReverseMatch(com.aliyun.ros.cdk.core.IResolvable sourceInstanceIdsReverseMatch) {
            this.sourceInstanceIdsReverseMatch = sourceInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getSourceRegionIds}
         * @param sourceRegionIds the value to be set.
         * @return {@code this}
         */
        public Builder sourceRegionIds(com.aliyun.ros.cdk.core.IResolvable sourceRegionIds) {
            this.sourceRegionIds = sourceRegionIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getSourceRegionIds}
         * @param sourceRegionIds the value to be set.
         * @return {@code this}
         */
        public Builder sourceRegionIds(java.util.List<? extends java.lang.Object> sourceRegionIds) {
            this.sourceRegionIds = sourceRegionIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getSourceRouteTableIds}
         * @param sourceRouteTableIds the value to be set.
         * @return {@code this}
         */
        public Builder sourceRouteTableIds(com.aliyun.ros.cdk.core.IResolvable sourceRouteTableIds) {
            this.sourceRouteTableIds = sourceRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapProps#getSourceRouteTableIds}
         * @param sourceRouteTableIds the value to be set.
         * @return {@code this}
         */
        public Builder sourceRouteTableIds(java.util.List<? extends java.lang.Object> sourceRouteTableIds) {
            this.sourceRouteTableIds = sourceRouteTableIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCenRouteMapProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCenRouteMapProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCenRouteMapProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCenRouteMapProps {
        private final java.lang.Object cenId;
        private final java.lang.Object cenRegionId;
        private final java.lang.Object mapResult;
        private final java.lang.Object priority;
        private final java.lang.Object transmitDirection;
        private final java.lang.Object asPathMatchMode;
        private final java.lang.Object cidrMatchMode;
        private final java.lang.Object communityMatchMode;
        private final java.lang.Object communityOperateMode;
        private final java.lang.Object description;
        private final java.lang.Object destinationChildInstanceTypes;
        private final java.lang.Object destinationCidrBlocks;
        private final java.lang.Object destinationInstanceIds;
        private final java.lang.Object destinationInstanceIdsReverseMatch;
        private final java.lang.Object destinationRouteTableIds;
        private final java.lang.Object matchAsns;
        private final java.lang.Object matchCommunitySet;
        private final java.lang.Object nextPriority;
        private final java.lang.Object operateCommunitySet;
        private final java.lang.Object preference;
        private final java.lang.Object prependAsPath;
        private final java.lang.Object routeTypes;
        private final java.lang.Object sourceChildInstanceTypes;
        private final java.lang.Object sourceInstanceIds;
        private final java.lang.Object sourceInstanceIdsReverseMatch;
        private final java.lang.Object sourceRegionIds;
        private final java.lang.Object sourceRouteTableIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenRegionId = software.amazon.jsii.Kernel.get(this, "cenRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mapResult = software.amazon.jsii.Kernel.get(this, "mapResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transmitDirection = software.amazon.jsii.Kernel.get(this, "transmitDirection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.asPathMatchMode = software.amazon.jsii.Kernel.get(this, "asPathMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cidrMatchMode = software.amazon.jsii.Kernel.get(this, "cidrMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.communityMatchMode = software.amazon.jsii.Kernel.get(this, "communityMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.communityOperateMode = software.amazon.jsii.Kernel.get(this, "communityOperateMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationChildInstanceTypes = software.amazon.jsii.Kernel.get(this, "destinationChildInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationCidrBlocks = software.amazon.jsii.Kernel.get(this, "destinationCidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationInstanceIds = software.amazon.jsii.Kernel.get(this, "destinationInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationInstanceIdsReverseMatch = software.amazon.jsii.Kernel.get(this, "destinationInstanceIdsReverseMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationRouteTableIds = software.amazon.jsii.Kernel.get(this, "destinationRouteTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.matchAsns = software.amazon.jsii.Kernel.get(this, "matchAsns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.matchCommunitySet = software.amazon.jsii.Kernel.get(this, "matchCommunitySet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nextPriority = software.amazon.jsii.Kernel.get(this, "nextPriority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.operateCommunitySet = software.amazon.jsii.Kernel.get(this, "operateCommunitySet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preference = software.amazon.jsii.Kernel.get(this, "preference", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prependAsPath = software.amazon.jsii.Kernel.get(this, "prependAsPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTypes = software.amazon.jsii.Kernel.get(this, "routeTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceChildInstanceTypes = software.amazon.jsii.Kernel.get(this, "sourceChildInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceInstanceIds = software.amazon.jsii.Kernel.get(this, "sourceInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceInstanceIdsReverseMatch = software.amazon.jsii.Kernel.get(this, "sourceInstanceIdsReverseMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceRegionIds = software.amazon.jsii.Kernel.get(this, "sourceRegionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceRouteTableIds = software.amazon.jsii.Kernel.get(this, "sourceRouteTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.cenRegionId = java.util.Objects.requireNonNull(builder.cenRegionId, "cenRegionId is required");
            this.mapResult = java.util.Objects.requireNonNull(builder.mapResult, "mapResult is required");
            this.priority = java.util.Objects.requireNonNull(builder.priority, "priority is required");
            this.transmitDirection = java.util.Objects.requireNonNull(builder.transmitDirection, "transmitDirection is required");
            this.asPathMatchMode = builder.asPathMatchMode;
            this.cidrMatchMode = builder.cidrMatchMode;
            this.communityMatchMode = builder.communityMatchMode;
            this.communityOperateMode = builder.communityOperateMode;
            this.description = builder.description;
            this.destinationChildInstanceTypes = builder.destinationChildInstanceTypes;
            this.destinationCidrBlocks = builder.destinationCidrBlocks;
            this.destinationInstanceIds = builder.destinationInstanceIds;
            this.destinationInstanceIdsReverseMatch = builder.destinationInstanceIdsReverseMatch;
            this.destinationRouteTableIds = builder.destinationRouteTableIds;
            this.matchAsns = builder.matchAsns;
            this.matchCommunitySet = builder.matchCommunitySet;
            this.nextPriority = builder.nextPriority;
            this.operateCommunitySet = builder.operateCommunitySet;
            this.preference = builder.preference;
            this.prependAsPath = builder.prependAsPath;
            this.routeTypes = builder.routeTypes;
            this.sourceChildInstanceTypes = builder.sourceChildInstanceTypes;
            this.sourceInstanceIds = builder.sourceInstanceIds;
            this.sourceInstanceIdsReverseMatch = builder.sourceInstanceIdsReverseMatch;
            this.sourceRegionIds = builder.sourceRegionIds;
            this.sourceRouteTableIds = builder.sourceRouteTableIds;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getCenRegionId() {
            return this.cenRegionId;
        }

        @Override
        public final java.lang.Object getMapResult() {
            return this.mapResult;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getTransmitDirection() {
            return this.transmitDirection;
        }

        @Override
        public final java.lang.Object getAsPathMatchMode() {
            return this.asPathMatchMode;
        }

        @Override
        public final java.lang.Object getCidrMatchMode() {
            return this.cidrMatchMode;
        }

        @Override
        public final java.lang.Object getCommunityMatchMode() {
            return this.communityMatchMode;
        }

        @Override
        public final java.lang.Object getCommunityOperateMode() {
            return this.communityOperateMode;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDestinationChildInstanceTypes() {
            return this.destinationChildInstanceTypes;
        }

        @Override
        public final java.lang.Object getDestinationCidrBlocks() {
            return this.destinationCidrBlocks;
        }

        @Override
        public final java.lang.Object getDestinationInstanceIds() {
            return this.destinationInstanceIds;
        }

        @Override
        public final java.lang.Object getDestinationInstanceIdsReverseMatch() {
            return this.destinationInstanceIdsReverseMatch;
        }

        @Override
        public final java.lang.Object getDestinationRouteTableIds() {
            return this.destinationRouteTableIds;
        }

        @Override
        public final java.lang.Object getMatchAsns() {
            return this.matchAsns;
        }

        @Override
        public final java.lang.Object getMatchCommunitySet() {
            return this.matchCommunitySet;
        }

        @Override
        public final java.lang.Object getNextPriority() {
            return this.nextPriority;
        }

        @Override
        public final java.lang.Object getOperateCommunitySet() {
            return this.operateCommunitySet;
        }

        @Override
        public final java.lang.Object getPreference() {
            return this.preference;
        }

        @Override
        public final java.lang.Object getPrependAsPath() {
            return this.prependAsPath;
        }

        @Override
        public final java.lang.Object getRouteTypes() {
            return this.routeTypes;
        }

        @Override
        public final java.lang.Object getSourceChildInstanceTypes() {
            return this.sourceChildInstanceTypes;
        }

        @Override
        public final java.lang.Object getSourceInstanceIds() {
            return this.sourceInstanceIds;
        }

        @Override
        public final java.lang.Object getSourceInstanceIdsReverseMatch() {
            return this.sourceInstanceIdsReverseMatch;
        }

        @Override
        public final java.lang.Object getSourceRegionIds() {
            return this.sourceRegionIds;
        }

        @Override
        public final java.lang.Object getSourceRouteTableIds() {
            return this.sourceRouteTableIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("cenRegionId", om.valueToTree(this.getCenRegionId()));
            data.set("mapResult", om.valueToTree(this.getMapResult()));
            data.set("priority", om.valueToTree(this.getPriority()));
            data.set("transmitDirection", om.valueToTree(this.getTransmitDirection()));
            if (this.getAsPathMatchMode() != null) {
                data.set("asPathMatchMode", om.valueToTree(this.getAsPathMatchMode()));
            }
            if (this.getCidrMatchMode() != null) {
                data.set("cidrMatchMode", om.valueToTree(this.getCidrMatchMode()));
            }
            if (this.getCommunityMatchMode() != null) {
                data.set("communityMatchMode", om.valueToTree(this.getCommunityMatchMode()));
            }
            if (this.getCommunityOperateMode() != null) {
                data.set("communityOperateMode", om.valueToTree(this.getCommunityOperateMode()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDestinationChildInstanceTypes() != null) {
                data.set("destinationChildInstanceTypes", om.valueToTree(this.getDestinationChildInstanceTypes()));
            }
            if (this.getDestinationCidrBlocks() != null) {
                data.set("destinationCidrBlocks", om.valueToTree(this.getDestinationCidrBlocks()));
            }
            if (this.getDestinationInstanceIds() != null) {
                data.set("destinationInstanceIds", om.valueToTree(this.getDestinationInstanceIds()));
            }
            if (this.getDestinationInstanceIdsReverseMatch() != null) {
                data.set("destinationInstanceIdsReverseMatch", om.valueToTree(this.getDestinationInstanceIdsReverseMatch()));
            }
            if (this.getDestinationRouteTableIds() != null) {
                data.set("destinationRouteTableIds", om.valueToTree(this.getDestinationRouteTableIds()));
            }
            if (this.getMatchAsns() != null) {
                data.set("matchAsns", om.valueToTree(this.getMatchAsns()));
            }
            if (this.getMatchCommunitySet() != null) {
                data.set("matchCommunitySet", om.valueToTree(this.getMatchCommunitySet()));
            }
            if (this.getNextPriority() != null) {
                data.set("nextPriority", om.valueToTree(this.getNextPriority()));
            }
            if (this.getOperateCommunitySet() != null) {
                data.set("operateCommunitySet", om.valueToTree(this.getOperateCommunitySet()));
            }
            if (this.getPreference() != null) {
                data.set("preference", om.valueToTree(this.getPreference()));
            }
            if (this.getPrependAsPath() != null) {
                data.set("prependAsPath", om.valueToTree(this.getPrependAsPath()));
            }
            if (this.getRouteTypes() != null) {
                data.set("routeTypes", om.valueToTree(this.getRouteTypes()));
            }
            if (this.getSourceChildInstanceTypes() != null) {
                data.set("sourceChildInstanceTypes", om.valueToTree(this.getSourceChildInstanceTypes()));
            }
            if (this.getSourceInstanceIds() != null) {
                data.set("sourceInstanceIds", om.valueToTree(this.getSourceInstanceIds()));
            }
            if (this.getSourceInstanceIdsReverseMatch() != null) {
                data.set("sourceInstanceIdsReverseMatch", om.valueToTree(this.getSourceInstanceIdsReverseMatch()));
            }
            if (this.getSourceRegionIds() != null) {
                data.set("sourceRegionIds", om.valueToTree(this.getSourceRegionIds()));
            }
            if (this.getSourceRouteTableIds() != null) {
                data.set("sourceRouteTableIds", om.valueToTree(this.getSourceRouteTableIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosCenRouteMapProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCenRouteMapProps.Jsii$Proxy that = (RosCenRouteMapProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!cenRegionId.equals(that.cenRegionId)) return false;
            if (!mapResult.equals(that.mapResult)) return false;
            if (!priority.equals(that.priority)) return false;
            if (!transmitDirection.equals(that.transmitDirection)) return false;
            if (this.asPathMatchMode != null ? !this.asPathMatchMode.equals(that.asPathMatchMode) : that.asPathMatchMode != null) return false;
            if (this.cidrMatchMode != null ? !this.cidrMatchMode.equals(that.cidrMatchMode) : that.cidrMatchMode != null) return false;
            if (this.communityMatchMode != null ? !this.communityMatchMode.equals(that.communityMatchMode) : that.communityMatchMode != null) return false;
            if (this.communityOperateMode != null ? !this.communityOperateMode.equals(that.communityOperateMode) : that.communityOperateMode != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.destinationChildInstanceTypes != null ? !this.destinationChildInstanceTypes.equals(that.destinationChildInstanceTypes) : that.destinationChildInstanceTypes != null) return false;
            if (this.destinationCidrBlocks != null ? !this.destinationCidrBlocks.equals(that.destinationCidrBlocks) : that.destinationCidrBlocks != null) return false;
            if (this.destinationInstanceIds != null ? !this.destinationInstanceIds.equals(that.destinationInstanceIds) : that.destinationInstanceIds != null) return false;
            if (this.destinationInstanceIdsReverseMatch != null ? !this.destinationInstanceIdsReverseMatch.equals(that.destinationInstanceIdsReverseMatch) : that.destinationInstanceIdsReverseMatch != null) return false;
            if (this.destinationRouteTableIds != null ? !this.destinationRouteTableIds.equals(that.destinationRouteTableIds) : that.destinationRouteTableIds != null) return false;
            if (this.matchAsns != null ? !this.matchAsns.equals(that.matchAsns) : that.matchAsns != null) return false;
            if (this.matchCommunitySet != null ? !this.matchCommunitySet.equals(that.matchCommunitySet) : that.matchCommunitySet != null) return false;
            if (this.nextPriority != null ? !this.nextPriority.equals(that.nextPriority) : that.nextPriority != null) return false;
            if (this.operateCommunitySet != null ? !this.operateCommunitySet.equals(that.operateCommunitySet) : that.operateCommunitySet != null) return false;
            if (this.preference != null ? !this.preference.equals(that.preference) : that.preference != null) return false;
            if (this.prependAsPath != null ? !this.prependAsPath.equals(that.prependAsPath) : that.prependAsPath != null) return false;
            if (this.routeTypes != null ? !this.routeTypes.equals(that.routeTypes) : that.routeTypes != null) return false;
            if (this.sourceChildInstanceTypes != null ? !this.sourceChildInstanceTypes.equals(that.sourceChildInstanceTypes) : that.sourceChildInstanceTypes != null) return false;
            if (this.sourceInstanceIds != null ? !this.sourceInstanceIds.equals(that.sourceInstanceIds) : that.sourceInstanceIds != null) return false;
            if (this.sourceInstanceIdsReverseMatch != null ? !this.sourceInstanceIdsReverseMatch.equals(that.sourceInstanceIdsReverseMatch) : that.sourceInstanceIdsReverseMatch != null) return false;
            if (this.sourceRegionIds != null ? !this.sourceRegionIds.equals(that.sourceRegionIds) : that.sourceRegionIds != null) return false;
            return this.sourceRouteTableIds != null ? this.sourceRouteTableIds.equals(that.sourceRouteTableIds) : that.sourceRouteTableIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.cenRegionId.hashCode());
            result = 31 * result + (this.mapResult.hashCode());
            result = 31 * result + (this.priority.hashCode());
            result = 31 * result + (this.transmitDirection.hashCode());
            result = 31 * result + (this.asPathMatchMode != null ? this.asPathMatchMode.hashCode() : 0);
            result = 31 * result + (this.cidrMatchMode != null ? this.cidrMatchMode.hashCode() : 0);
            result = 31 * result + (this.communityMatchMode != null ? this.communityMatchMode.hashCode() : 0);
            result = 31 * result + (this.communityOperateMode != null ? this.communityOperateMode.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.destinationChildInstanceTypes != null ? this.destinationChildInstanceTypes.hashCode() : 0);
            result = 31 * result + (this.destinationCidrBlocks != null ? this.destinationCidrBlocks.hashCode() : 0);
            result = 31 * result + (this.destinationInstanceIds != null ? this.destinationInstanceIds.hashCode() : 0);
            result = 31 * result + (this.destinationInstanceIdsReverseMatch != null ? this.destinationInstanceIdsReverseMatch.hashCode() : 0);
            result = 31 * result + (this.destinationRouteTableIds != null ? this.destinationRouteTableIds.hashCode() : 0);
            result = 31 * result + (this.matchAsns != null ? this.matchAsns.hashCode() : 0);
            result = 31 * result + (this.matchCommunitySet != null ? this.matchCommunitySet.hashCode() : 0);
            result = 31 * result + (this.nextPriority != null ? this.nextPriority.hashCode() : 0);
            result = 31 * result + (this.operateCommunitySet != null ? this.operateCommunitySet.hashCode() : 0);
            result = 31 * result + (this.preference != null ? this.preference.hashCode() : 0);
            result = 31 * result + (this.prependAsPath != null ? this.prependAsPath.hashCode() : 0);
            result = 31 * result + (this.routeTypes != null ? this.routeTypes.hashCode() : 0);
            result = 31 * result + (this.sourceChildInstanceTypes != null ? this.sourceChildInstanceTypes.hashCode() : 0);
            result = 31 * result + (this.sourceInstanceIds != null ? this.sourceInstanceIds.hashCode() : 0);
            result = 31 * result + (this.sourceInstanceIdsReverseMatch != null ? this.sourceInstanceIdsReverseMatch.hashCode() : 0);
            result = 31 * result + (this.sourceRegionIds != null ? this.sourceRegionIds.hashCode() : 0);
            result = 31 * result + (this.sourceRouteTableIds != null ? this.sourceRouteTableIds.hashCode() : 0);
            return result;
        }
    }
}
