def update_account(uid, user, *args, **kwargs):
    if uid:
        user.fs_id = uid
        user.save()
