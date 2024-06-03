package com.aliyun.ros.cdk.cen;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CEN::CenRouteMap</code>, which is used to create a routing policy.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.959Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosCenRouteMap")
public class RosCenRouteMap extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCenRouteMap(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCenRouteMap(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cen.RosCenRouteMap.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCenRouteMap(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.RosCenRouteMapProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteMapId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteMapId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCenId() {
        return software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenId", java.util.Objects.requireNonNull(value, "cenId is required"));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenId", java.util.Objects.requireNonNull(value, "cenId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCenRegionId() {
        return software.amazon.jsii.Kernel.get(this, "cenRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenRegionId", java.util.Objects.requireNonNull(value, "cenRegionId is required"));
    }

    /**
     */
    public void setCenRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenRegionId", java.util.Objects.requireNonNull(value, "cenRegionId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMapResult() {
        return software.amazon.jsii.Kernel.get(this, "mapResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMapResult(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mapResult", java.util.Objects.requireNonNull(value, "mapResult is required"));
    }

    /**
     */
    public void setMapResult(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mapResult", java.util.Objects.requireNonNull(value, "mapResult is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTransmitDirection() {
        return software.amazon.jsii.Kernel.get(this, "transmitDirection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransmitDirection(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transmitDirection", java.util.Objects.requireNonNull(value, "transmitDirection is required"));
    }

    /**
     */
    public void setTransmitDirection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transmitDirection", java.util.Objects.requireNonNull(value, "transmitDirection is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAsPathMatchMode() {
        return software.amazon.jsii.Kernel.get(this, "asPathMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAsPathMatchMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "asPathMatchMode", value);
    }

    /**
     */
    public void setAsPathMatchMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "asPathMatchMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCidrMatchMode() {
        return software.amazon.jsii.Kernel.get(this, "cidrMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCidrMatchMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cidrMatchMode", value);
    }

    /**
     */
    public void setCidrMatchMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cidrMatchMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCommunityMatchMode() {
        return software.amazon.jsii.Kernel.get(this, "communityMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCommunityMatchMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "communityMatchMode", value);
    }

    /**
     */
    public void setCommunityMatchMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "communityMatchMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCommunityOperateMode() {
        return software.amazon.jsii.Kernel.get(this, "communityOperateMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCommunityOperateMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "communityOperateMode", value);
    }

    /**
     */
    public void setCommunityOperateMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "communityOperateMode", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationChildInstanceTypes() {
        return software.amazon.jsii.Kernel.get(this, "destinationChildInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationChildInstanceTypes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationChildInstanceTypes", value);
    }

    /**
     */
    public void setDestinationChildInstanceTypes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "destinationChildInstanceTypes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationCidrBlocks() {
        return software.amazon.jsii.Kernel.get(this, "destinationCidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationCidrBlocks(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationCidrBlocks", value);
    }

    /**
     */
    public void setDestinationCidrBlocks(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "destinationCidrBlocks", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "destinationInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationInstanceIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationInstanceIds", value);
    }

    /**
     */
    public void setDestinationInstanceIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "destinationInstanceIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationInstanceIdsReverseMatch() {
        return software.amazon.jsii.Kernel.get(this, "destinationInstanceIdsReverseMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationInstanceIdsReverseMatch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "destinationInstanceIdsReverseMatch", value);
    }

    /**
     */
    public void setDestinationInstanceIdsReverseMatch(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationInstanceIdsReverseMatch", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationRouteTableIds() {
        return software.amazon.jsii.Kernel.get(this, "destinationRouteTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationRouteTableIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationRouteTableIds", value);
    }

    /**
     */
    public void setDestinationRouteTableIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "destinationRouteTableIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMatchAsns() {
        return software.amazon.jsii.Kernel.get(this, "matchAsns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMatchAsns(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "matchAsns", value);
    }

    /**
     */
    public void setMatchAsns(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "matchAsns", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMatchCommunitySet() {
        return software.amazon.jsii.Kernel.get(this, "matchCommunitySet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMatchCommunitySet(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "matchCommunitySet", value);
    }

    /**
     */
    public void setMatchCommunitySet(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "matchCommunitySet", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNextPriority() {
        return software.amazon.jsii.Kernel.get(this, "nextPriority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNextPriority(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "nextPriority", value);
    }

    /**
     */
    public void setNextPriority(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nextPriority", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOperateCommunitySet() {
        return software.amazon.jsii.Kernel.get(this, "operateCommunitySet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOperateCommunitySet(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "operateCommunitySet", value);
    }

    /**
     */
    public void setOperateCommunitySet(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "operateCommunitySet", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreference() {
        return software.amazon.jsii.Kernel.get(this, "preference", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreference(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "preference", value);
    }

    /**
     */
    public void setPreference(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preference", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrependAsPath() {
        return software.amazon.jsii.Kernel.get(this, "prependAsPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrependAsPath(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "prependAsPath", value);
    }

    /**
     */
    public void setPrependAsPath(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "prependAsPath", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteTypes() {
        return software.amazon.jsii.Kernel.get(this, "routeTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteTypes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeTypes", value);
    }

    /**
     */
    public void setRouteTypes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "routeTypes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceChildInstanceTypes() {
        return software.amazon.jsii.Kernel.get(this, "sourceChildInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceChildInstanceTypes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceChildInstanceTypes", value);
    }

    /**
     */
    public void setSourceChildInstanceTypes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "sourceChildInstanceTypes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "sourceInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceInstanceIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceInstanceIds", value);
    }

    /**
     */
    public void setSourceInstanceIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "sourceInstanceIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceInstanceIdsReverseMatch() {
        return software.amazon.jsii.Kernel.get(this, "sourceInstanceIdsReverseMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceInstanceIdsReverseMatch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "sourceInstanceIdsReverseMatch", value);
    }

    /**
     */
    public void setSourceInstanceIdsReverseMatch(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceInstanceIdsReverseMatch", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceRegionIds() {
        return software.amazon.jsii.Kernel.get(this, "sourceRegionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceRegionIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceRegionIds", value);
    }

    /**
     */
    public void setSourceRegionIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "sourceRegionIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceRouteTableIds() {
        return software.amazon.jsii.Kernel.get(this, "sourceRouteTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceRouteTableIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceRouteTableIds", value);
    }

    /**
     */
    public void setSourceRouteTableIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "sourceRouteTableIds", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.RosCenRouteMap}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.RosCenRouteMap> {
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
        private final com.aliyun.ros.cdk.cen.RosCenRouteMapProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.RosCenRouteMapProps.Builder();
        }

        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * @return {@code this}
         * @param cenRegionId This parameter is required.
         */
        public Builder cenRegionId(final java.lang.String cenRegionId) {
            this.props.cenRegionId(cenRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenRegionId This parameter is required.
         */
        public Builder cenRegionId(final com.aliyun.ros.cdk.core.IResolvable cenRegionId) {
            this.props.cenRegionId(cenRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param mapResult This parameter is required.
         */
        public Builder mapResult(final java.lang.String mapResult) {
            this.props.mapResult(mapResult);
            return this;
        }
        /**
         * @return {@code this}
         * @param mapResult This parameter is required.
         */
        public Builder mapResult(final com.aliyun.ros.cdk.core.IResolvable mapResult) {
            this.props.mapResult(mapResult);
            return this;
        }

        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @return {@code this}
         * @param transmitDirection This parameter is required.
         */
        public Builder transmitDirection(final java.lang.String transmitDirection) {
            this.props.transmitDirection(transmitDirection);
            return this;
        }
        /**
         * @return {@code this}
         * @param transmitDirection This parameter is required.
         */
        public Builder transmitDirection(final com.aliyun.ros.cdk.core.IResolvable transmitDirection) {
            this.props.transmitDirection(transmitDirection);
            return this;
        }

        /**
         * @return {@code this}
         * @param asPathMatchMode This parameter is required.
         */
        public Builder asPathMatchMode(final java.lang.String asPathMatchMode) {
            this.props.asPathMatchMode(asPathMatchMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param asPathMatchMode This parameter is required.
         */
        public Builder asPathMatchMode(final com.aliyun.ros.cdk.core.IResolvable asPathMatchMode) {
            this.props.asPathMatchMode(asPathMatchMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param cidrMatchMode This parameter is required.
         */
        public Builder cidrMatchMode(final java.lang.String cidrMatchMode) {
            this.props.cidrMatchMode(cidrMatchMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param cidrMatchMode This parameter is required.
         */
        public Builder cidrMatchMode(final com.aliyun.ros.cdk.core.IResolvable cidrMatchMode) {
            this.props.cidrMatchMode(cidrMatchMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param communityMatchMode This parameter is required.
         */
        public Builder communityMatchMode(final java.lang.String communityMatchMode) {
            this.props.communityMatchMode(communityMatchMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param communityMatchMode This parameter is required.
         */
        public Builder communityMatchMode(final com.aliyun.ros.cdk.core.IResolvable communityMatchMode) {
            this.props.communityMatchMode(communityMatchMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param communityOperateMode This parameter is required.
         */
        public Builder communityOperateMode(final java.lang.String communityOperateMode) {
            this.props.communityOperateMode(communityOperateMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param communityOperateMode This parameter is required.
         */
        public Builder communityOperateMode(final com.aliyun.ros.cdk.core.IResolvable communityOperateMode) {
            this.props.communityOperateMode(communityOperateMode);
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
         * @param destinationChildInstanceTypes This parameter is required.
         */
        public Builder destinationChildInstanceTypes(final com.aliyun.ros.cdk.core.IResolvable destinationChildInstanceTypes) {
            this.props.destinationChildInstanceTypes(destinationChildInstanceTypes);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationChildInstanceTypes This parameter is required.
         */
        public Builder destinationChildInstanceTypes(final java.util.List<? extends java.lang.Object> destinationChildInstanceTypes) {
            this.props.destinationChildInstanceTypes(destinationChildInstanceTypes);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationCidrBlocks This parameter is required.
         */
        public Builder destinationCidrBlocks(final com.aliyun.ros.cdk.core.IResolvable destinationCidrBlocks) {
            this.props.destinationCidrBlocks(destinationCidrBlocks);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationCidrBlocks This parameter is required.
         */
        public Builder destinationCidrBlocks(final java.util.List<? extends java.lang.Object> destinationCidrBlocks) {
            this.props.destinationCidrBlocks(destinationCidrBlocks);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationInstanceIds This parameter is required.
         */
        public Builder destinationInstanceIds(final com.aliyun.ros.cdk.core.IResolvable destinationInstanceIds) {
            this.props.destinationInstanceIds(destinationInstanceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationInstanceIds This parameter is required.
         */
        public Builder destinationInstanceIds(final java.util.List<? extends java.lang.Object> destinationInstanceIds) {
            this.props.destinationInstanceIds(destinationInstanceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationInstanceIdsReverseMatch This parameter is required.
         */
        public Builder destinationInstanceIdsReverseMatch(final java.lang.Boolean destinationInstanceIdsReverseMatch) {
            this.props.destinationInstanceIdsReverseMatch(destinationInstanceIdsReverseMatch);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationInstanceIdsReverseMatch This parameter is required.
         */
        public Builder destinationInstanceIdsReverseMatch(final com.aliyun.ros.cdk.core.IResolvable destinationInstanceIdsReverseMatch) {
            this.props.destinationInstanceIdsReverseMatch(destinationInstanceIdsReverseMatch);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationRouteTableIds This parameter is required.
         */
        public Builder destinationRouteTableIds(final com.aliyun.ros.cdk.core.IResolvable destinationRouteTableIds) {
            this.props.destinationRouteTableIds(destinationRouteTableIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationRouteTableIds This parameter is required.
         */
        public Builder destinationRouteTableIds(final java.util.List<? extends java.lang.Object> destinationRouteTableIds) {
            this.props.destinationRouteTableIds(destinationRouteTableIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param matchAsns This parameter is required.
         */
        public Builder matchAsns(final com.aliyun.ros.cdk.core.IResolvable matchAsns) {
            this.props.matchAsns(matchAsns);
            return this;
        }
        /**
         * @return {@code this}
         * @param matchAsns This parameter is required.
         */
        public Builder matchAsns(final java.util.List<? extends java.lang.Object> matchAsns) {
            this.props.matchAsns(matchAsns);
            return this;
        }

        /**
         * @return {@code this}
         * @param matchCommunitySet This parameter is required.
         */
        public Builder matchCommunitySet(final com.aliyun.ros.cdk.core.IResolvable matchCommunitySet) {
            this.props.matchCommunitySet(matchCommunitySet);
            return this;
        }
        /**
         * @return {@code this}
         * @param matchCommunitySet This parameter is required.
         */
        public Builder matchCommunitySet(final java.util.List<? extends java.lang.Object> matchCommunitySet) {
            this.props.matchCommunitySet(matchCommunitySet);
            return this;
        }

        /**
         * @return {@code this}
         * @param nextPriority This parameter is required.
         */
        public Builder nextPriority(final java.lang.Number nextPriority) {
            this.props.nextPriority(nextPriority);
            return this;
        }
        /**
         * @return {@code this}
         * @param nextPriority This parameter is required.
         */
        public Builder nextPriority(final com.aliyun.ros.cdk.core.IResolvable nextPriority) {
            this.props.nextPriority(nextPriority);
            return this;
        }

        /**
         * @return {@code this}
         * @param operateCommunitySet This parameter is required.
         */
        public Builder operateCommunitySet(final com.aliyun.ros.cdk.core.IResolvable operateCommunitySet) {
            this.props.operateCommunitySet(operateCommunitySet);
            return this;
        }
        /**
         * @return {@code this}
         * @param operateCommunitySet This parameter is required.
         */
        public Builder operateCommunitySet(final java.util.List<? extends java.lang.Object> operateCommunitySet) {
            this.props.operateCommunitySet(operateCommunitySet);
            return this;
        }

        /**
         * @return {@code this}
         * @param preference This parameter is required.
         */
        public Builder preference(final java.lang.Number preference) {
            this.props.preference(preference);
            return this;
        }
        /**
         * @return {@code this}
         * @param preference This parameter is required.
         */
        public Builder preference(final com.aliyun.ros.cdk.core.IResolvable preference) {
            this.props.preference(preference);
            return this;
        }

        /**
         * @return {@code this}
         * @param prependAsPath This parameter is required.
         */
        public Builder prependAsPath(final com.aliyun.ros.cdk.core.IResolvable prependAsPath) {
            this.props.prependAsPath(prependAsPath);
            return this;
        }
        /**
         * @return {@code this}
         * @param prependAsPath This parameter is required.
         */
        public Builder prependAsPath(final java.util.List<? extends java.lang.Object> prependAsPath) {
            this.props.prependAsPath(prependAsPath);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeTypes This parameter is required.
         */
        public Builder routeTypes(final com.aliyun.ros.cdk.core.IResolvable routeTypes) {
            this.props.routeTypes(routeTypes);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeTypes This parameter is required.
         */
        public Builder routeTypes(final java.util.List<? extends java.lang.Object> routeTypes) {
            this.props.routeTypes(routeTypes);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceChildInstanceTypes This parameter is required.
         */
        public Builder sourceChildInstanceTypes(final com.aliyun.ros.cdk.core.IResolvable sourceChildInstanceTypes) {
            this.props.sourceChildInstanceTypes(sourceChildInstanceTypes);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceChildInstanceTypes This parameter is required.
         */
        public Builder sourceChildInstanceTypes(final java.util.List<? extends java.lang.Object> sourceChildInstanceTypes) {
            this.props.sourceChildInstanceTypes(sourceChildInstanceTypes);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceInstanceIds This parameter is required.
         */
        public Builder sourceInstanceIds(final com.aliyun.ros.cdk.core.IResolvable sourceInstanceIds) {
            this.props.sourceInstanceIds(sourceInstanceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceInstanceIds This parameter is required.
         */
        public Builder sourceInstanceIds(final java.util.List<? extends java.lang.Object> sourceInstanceIds) {
            this.props.sourceInstanceIds(sourceInstanceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceInstanceIdsReverseMatch This parameter is required.
         */
        public Builder sourceInstanceIdsReverseMatch(final java.lang.Boolean sourceInstanceIdsReverseMatch) {
            this.props.sourceInstanceIdsReverseMatch(sourceInstanceIdsReverseMatch);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceInstanceIdsReverseMatch This parameter is required.
         */
        public Builder sourceInstanceIdsReverseMatch(final com.aliyun.ros.cdk.core.IResolvable sourceInstanceIdsReverseMatch) {
            this.props.sourceInstanceIdsReverseMatch(sourceInstanceIdsReverseMatch);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceRegionIds This parameter is required.
         */
        public Builder sourceRegionIds(final com.aliyun.ros.cdk.core.IResolvable sourceRegionIds) {
            this.props.sourceRegionIds(sourceRegionIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceRegionIds This parameter is required.
         */
        public Builder sourceRegionIds(final java.util.List<? extends java.lang.Object> sourceRegionIds) {
            this.props.sourceRegionIds(sourceRegionIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceRouteTableIds This parameter is required.
         */
        public Builder sourceRouteTableIds(final com.aliyun.ros.cdk.core.IResolvable sourceRouteTableIds) {
            this.props.sourceRouteTableIds(sourceRouteTableIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceRouteTableIds This parameter is required.
         */
        public Builder sourceRouteTableIds(final java.util.List<? extends java.lang.Object> sourceRouteTableIds) {
            this.props.sourceRouteTableIds(sourceRouteTableIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.RosCenRouteMap}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.RosCenRouteMap build() {
            return new com.aliyun.ros.cdk.cen.RosCenRouteMap(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
