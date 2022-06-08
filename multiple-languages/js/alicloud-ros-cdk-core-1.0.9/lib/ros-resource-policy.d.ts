/**
 * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
 * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
 * attribute, ROS deletes the resource by default.
 */
export declare enum RosDeletionPolicy {
    /**
     * ROS will deletes the resource and all its content if applicable during stack deletion.
     * You can add this deletion policy to any resource type.
     */
    DELETE = "Delete",
    /**
     * ROS keeps the resource without deleting the resource or its contents when its stack is deleted.
     * You can add this deletion policy to any resource type.
     */
    RETAIN = "Retain"
}
//# sourceMappingURL=ros-resource-policy.d.ts.map